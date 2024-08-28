
export interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}

export const dummy_tasks:Task[] = 
[
    {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
        dueDate: '2024-12-31'
    },
    {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
    },
    {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary: 'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
    }
];