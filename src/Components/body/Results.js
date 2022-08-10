import {CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const Results = ({onReturn}) => {
    return (
        <> {onReturn.map(receita => {
            return (
                <card sx={{maxWidth: 10}}>
                    <CardActionArea className="cards">
                        <CardMedia
                            component="img"
                            height="140"
                            image={receita.image_url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {receita.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {receita.publisher}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </card>
            )
        })}</>
    )

}
export default Results