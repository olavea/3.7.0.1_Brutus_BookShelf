import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function BookCard({ book }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={book.ForsideBilde}
          title={book.Engelsk_navn}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {book.Norsk_navn}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.Engelsk_navn}–{book.Enhj_rninger_eller_kaniner}–
            {book.Type_bok}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Read at: {book.Lenke_til_boka}
        </Button>
      </CardActions>
    </Card>
  )
}
