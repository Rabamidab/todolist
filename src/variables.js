import TaskCollection from './collections/taskCollection';

const KEYS = {
    ENTER: 13,
};

const tasksCollection = new TaskCollection([
    {
        title: 'Сходить в магазин',
    },
    {
        title: 'Получить почту',
    },
    {
        title: 'Сходить на работу',
    },
]);

export { KEYS, tasksCollection };
