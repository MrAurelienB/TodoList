
export const TASK_LIST_TYPE = {
    LATE: {value: 0, name: 'En retard'},
    TODAY: {value: 1, name: 'Aujourd\'hui'},
    THIS_WEEK: {value: 2, name: 'Cette semaine'},
    THIS_MONTH: {value: 3, name: 'Ce mois-ci'},
    LATER: {value: 4, name: 'Plus tard'},
    MAX: {value: 5, name: 'MAX'},
};

export const TASK_LIST_TYPE_BY_VALUE = [
    TASK_LIST_TYPE.LATE,
    TASK_LIST_TYPE.TODAY,
    TASK_LIST_TYPE.THIS_WEEK,
    TASK_LIST_TYPE.THIS_MONTH,
    TASK_LIST_TYPE.LATER,
    TASK_LIST_TYPE.MAX,
];
