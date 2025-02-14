import dotenv from "dotenv";
import * as mongodb from "mongodb";
import { ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import { Employee } from "../employee";

export const collections: {
  employees?: mongodb.Collection<Employee>;
} = {};

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();

  const db = client.db("meanStackExample");
  await applySchemaValidation(db);

  const employeesCollection = db.collection<Employee>("employees");
  collections.employees = employeesCollection;
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
  const jsonSchema = {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "position", "level"],
      additionalProperties: false,
      properties: {
        _id: {},
        name: {
          bsonType: "string",
          description: "'name' is required and is a string",
        },
        position: {
          bsonType: "string",
          description: "'position' is required and is a string",
          minLength: 5,
        },
        level: {
          bsonType: "string",
          description:
            "'level' is required and is one of 'junior', 'mid', or 'senior'",
          enum: ["junior", "mid", "senior"],
        },
      },
    },
  };

  // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db
    .command({
      collMod: "employees",
      validator: jsonSchema,
    })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === "NamespaceNotFound") {
        await db.createCollection("employees", { validator: jsonSchema });
      }
    });
}

export function startMongooseDatabase() {
  dotenv.config();

  // Connect to MongoDB via mongoose
  const { ATLAS_URI } = process.env;

  if (!ATLAS_URI) {
    console.error(
      "No ATLAS_URI environment variable has been defined in config.env"
    );
    process.exit(1);
  }

  mongoose
    .connect(ATLAS_URI, {
      dbName: "meanStackExample",
    })
    .then(() => console.log("Connected!"));

  connectToDatabase(ATLAS_URI).catch((error) => console.error(error));
}
