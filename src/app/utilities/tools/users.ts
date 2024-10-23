
export type User = {
  id: string;
  name: string;
  avatar: string;
}

const nameToId = ( name: string ) => {
  return name
    .toLowerCase()
    .replace(/[\W\s]+/g, '-');
};

const users: User[] = 
[
    {
      id: 'u1',
      name: 'Quentin Coldwater',
      avatar: 'quentin.jpg',
    },
    {
      id: 'u2',
      name: 'Alice Quinn',
      avatar: 'alice.jpg',
    },
    {
      id: 'u3',
      name: 'Margo Hanson',
      avatar: 'margo.jpg',
    },
    {
      id: 'u4',
      name: 'Josh Hoberman',
      avatar: 'josh.jpg',
    },
    {
      id: 'u5',
      name: 'Julia Wicker',
      avatar: 'julia.jpg',
    },
    {
      id: 'u6',
      name: 'Fen',
      avatar: 'fen.jpg',
    }
];

//* setting the user id to their name,
//* replacing any symbol and/or space with
//* hyphens, using the nameToId() function
//* regardless of what id they already have.

export const dummy_users: User[] = [...users].map(
  user => ({
      ...user,
      id: nameToId(user.name)      
  })
);
  