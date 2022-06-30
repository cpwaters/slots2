export default function user(req, res) {
    res.status(200).json(
        [{ 
            id: 1,
            name: 'Chris Waters',
            avatar: '../../images/profile.jpg'
        },
        { 
            id: 2,
            name: 'John Smith',
            avatar: '../../images/profile2.jpg'
        }, 
        { 
            id: 3,
            name: 'Paul Hogan',
            avatar: '../../images/profile3.jpg'
        }]
    )
}