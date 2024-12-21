export interface Certificate {
    id: number,
    url: string;
    technology: string;
    date: string;
    from: 'sololearn' | 'stepik' | 'freeCodeCamp'
}

/**
 * @description This is constant of certificates data
 */
export const certificateGroup: Certificate[] = [
    {
        id: 1,
        url: 'https://api2.sololearn.com/v2/certificates/CT-0NEWTENF/image/png',
        technology: 'Javascript',
        date: '22/10/2020',
        from: 'sololearn'
    },
    {
        id: 2,
        url: 'https://api2.sololearn.com/v2/certificates/CT-ADMKXHE4/image/png',
        technology: 'Python Core',
        date: '01/01/2021',
        from: 'sololearn'
    },
    {
        id: 3,
        url: 'https://api2.sololearn.com/v2/certificates/CT-RHUAHZ5P/image/png',
        technology: 'Responsive Web Design',
        date: '04/07/2021',
        from: 'sololearn'
    },
    {
        id: 4,
        url: 'https://api2.sololearn.com/v2/certificates/CT-2CZIHYSG/image/png',
        technology: 'React + Redux',
        date: '25/10/2020',
        from: 'sololearn'
    },
    {
        id: 5,
        url: 'https://api2.sololearn.com/v2/certificates/CT-MN5UWKQD/image/jpg',
        technology: 'CSS',
        date: '01/07/2019',
        from: 'sololearn'
    },
    {
        id: 6,
        url: 'https://api2.sololearn.com/v2/certificates/CT-2LDID8JA/image/png',
        technology: 'SQL',
        date: '8/01/2021',
        from: 'sololearn'
    },
    {
        id: 7,
        url: 'https://api2.sololearn.com/v2/certificates/CT-YCIMJA0Y/image/png',
        technology: 'PHP',
        date: '24/10/2020',
        from: 'sololearn'
    },
    {
        id: 8,
        url: 'https://api2.sololearn.com/v2/certificates/CT-VDBDSLZD/image/png',
        technology: 'Ruby',
        date: '26/11/2020',
        from: 'sololearn'
    },
    {
        id: 9,
        url: 'https://api2.sololearn.com/v2/certificates/CT-NXLNLH7L/image/png',
        technology: 'JQuery',
        date: '23/10/2020',
        from: 'sololearn'
    },
    {
        id: 10,
        url: 'https://api2.sololearn.com/v2/certificates/CT-2AMK9PWV/image/png',
        technology: 'HTML',
        date: '23/01/2019',
        from: 'sololearn'
    },
    {
        id: 11,
        url: 'https://stepik.org/certificate/f515551809ab024ef1eff2efdaf29c49f1cfa079.png?resolution=high',
        technology: 'Безопасность в интернете',
        date: '03/05/2021',
        from: 'stepik'
    },
    {
        id: 12,
        url: 'https://stepik.org/certificate/8d57b62b4ebb537e10b861b66a1538ef3dfd2460.png?resolution=high',
        technology: 'Веб-разработка для начинающих: HTML и CSS',
        date: '03/05/2021',
        from: 'stepik'
    },
    {
        id: 13,
        url: 'https://stepik.org/certificate/9bb885d66fdf101bacc4e72d3b00c6a73c4c38d4.png?resolution=high',
        technology: 'Программирование на языке C#',
        date: '12/12/2022',
        from: 'stepik'
    },
    {
        id: 14,
        url: '/assets/certificates/freecodecamp.png',
        technology: 'Responsive Web Design',
        date: '26/07/2023',
        from: 'freeCodeCamp'
    }
];