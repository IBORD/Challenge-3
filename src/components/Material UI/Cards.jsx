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
            description: 'The best balance of price and comfort. You will not go wrong with our basic rides.',
        },
        {
            title: 'Premium',
            image: 'URL_DA_IMAGEM_2',
            description: 'Upgrade to our premium rides for a luxurious experience.',
        },
    ];

    return (
        <Box display={'flex'} style={{ gap: '20px' }}>
            {cardsData.map((card, index) => (
                <Card key={index} sx={{ maxWidth: 300, marginBottom: 2 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={card.image}
                        title={card.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};

export default Cards;