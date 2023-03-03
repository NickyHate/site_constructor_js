import image from "./assets/image.png"
export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов на чистом JavaScript',
        options: {
            tag: 'h2',
            styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem;`
        }
    },
    {
        type: 'text',
        value: 'Some text'
    },
    {
        type: 'columns',
        value: [
            '111111',
            '222222',
            '333333'
        ]
    },
    {
        type: 'image',
        value: image
    }
]