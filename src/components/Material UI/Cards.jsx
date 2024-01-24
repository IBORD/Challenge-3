import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


const Cards = () => {
    const cardsData = [
        {
            title: 'Basic',
            image: "https://i.ibb.co/3Sgfcwd/card-image.jpg",
            description: 'The best balance of price and comfort. You will not go wrong with our basic rides.   ',
            backgroundColor: '#2c2c2c'
        },
        {
            title: 'Confort',
            image: 'https://i.ibb.co/RpwCqYJ/card-image-1.jpg',
            description: 'If comfort is your priority, this is the ride for you. It’s spacious and packed with features.',
            backgroundColor: '#2c2c2c'

        }, {
            title: 'Bussines',
            image: "https://i.ibb.co/J2XM2Zg/card-image-2.jpg",
            description: 'Do you want to travel around the city in style? Make sure to select or business class rides.',
            backgroundColor: '#2c2c2c'
        }, {
            title: 'Deluxe',
            image: "https://i.ibb.co/9s9rYZL/card-image-3.jpg",
            description: 'The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.',
            backgroundColor: '#2c2c2c'
        },
    ];

    return (
        <Box display={'flex'} style={{ gap: '20px', }}>
            {cardsData.map((card, index) => (
                <Card key={index} sx={{ maxWidth: 300, marginBottom: 2, backgroundColor: card.backgroundColor }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={card.image}
                        title={card.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#B3B3B3' }}>
                            {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ color: 'orange' }}>Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};

export default Cards;