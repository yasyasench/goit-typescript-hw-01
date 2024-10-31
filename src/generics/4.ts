type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  // Logic for updating user
  const user: User = {
    name: initialValues.name || 'Default Name',
    surname: initialValues.surname || 'Default Surname',
    email: initialValues.email || 'default@mail.com',
    password: initialValues.password || 'defaultPassword',
  };

  console.log('User created/updated:', user);
}

// Call function with partial user data
createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
