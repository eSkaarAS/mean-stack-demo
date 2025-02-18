type UserObjectDB = {
  id: string;
  name: string;
  age: number;
  email: string;
  zombie: boolean;
};

type UserObject = {
  name: string;
  age: number;
  email: string;
  zombie: boolean;
};

type UserSchema = {
  type: UserObject;
  createNewUser: (newUser: UserObject) => UserObjectDB;
  findUserById: (id: string) => UserObjectDB | undefined;
};

function getUserModel() {
  const userModel: UserSchema = {
    type: { name: 'user', age: 20, email: '', zombie: false },
    createNewUser: (user: UserObject) => {
      console.log('User created');
      return { id: '1', ...user };
    },
    findUserById: (id: string) => {
      console.log('User found');
      return {
        name: 'user',
        age: 20,
        email: '',
        zombie: false,
        id,
      };
    },
  };

  return userModel as any;
}

const user = getUserModel();

const test2 = user.findUserById('1');
if (!test2) throw new Error('User not found');
if (test2.zombie) throw new Error('User is a zombie');

console.log(test2);
