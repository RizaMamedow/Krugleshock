export interface ICertificate {
    id: number,
    url: string;
    technology: string;
    date: string;
    from: 'sololearn' | 'stepik' | 'freeCodeCamp'
}

export const certificates: ICertificate[] = [
    {
        id: 1,
        url: '/assets/certificates/1.png',
        technology: 'Javascript',
        date: '22/10/2020',
        from: 'sololearn'
    },
    {
        id: 2,
        url: '/assets/certificates/2.png',
        technology: 'Python Core',
        date: '01/01/2021',
        from: 'sololearn'
    },
    {
        id: 3,
        url: '/assets/certificates/3.png',
        technology: 'Responsive Web Design',
        date: '04/07/2021',
        from: 'sololearn'
    },
    {
        id: 4,
        url: '/assets/certificates/4.png',
        technology: 'React + Redux',
        date: '25/10/2020',
        from: 'sololearn'
    },
    {
        id: 5,
        url: '/assets/certificates/5.png',
        technology: 'CSS',
        date: '01/07/2019',
        from: 'sololearn'
    },
    {
        id: 6,
        url: '/assets/certificates/6.png',
        technology: 'SQL',
        date: '8/01/2021',
        from: 'sololearn'
    },
    {
        id: 7,
        url: '/assets/certificates/7.png',
        technology: 'PHP',
        date: '24/10/2020',
        from: 'sololearn'
    },
    {
        id: 8,
        url: '/assets/certificates/8.png',
        technology: 'Ruby',
        date: '26/11/2020',
        from: 'sololearn'
    },
    {
        id: 9,
        url: '/assets/certificates/9.png',
        technology: 'JQuery',
        date: '23/10/2020',
        from: 'sololearn'
    },
    {
        id: 10,
        url: '/assets/certificates/10.png',
        technology: 'HTML',
        date: '23/01/2019',
        from: 'sololearn'
    },
    {
        id: 11,
        url: '/assets/certificates/11.png',
        technology: 'Безопасность в интернете',
        date: '03/05/2021',
        from: 'stepik'
    },
    {
        id: 12,
        url: '/assets/certificates/12.png',
        technology: 'Веб-разработка для начинающих: HTML и CSS',
        date: '03/05/2021',
        from: 'stepik'
    },
    {
        id: 13,
        url: '/assets/certificates/13.png',
        technology: 'Программирование на языке C#',
        date: '12/12/2022',
        from: 'stepik'
    },
    {
        id: 14,
        url: '/assets/certificates/14.png',
        technology: 'Responsive Web Design',
        date: '26/07/2023',
        from: 'freeCodeCamp'
    }
];
