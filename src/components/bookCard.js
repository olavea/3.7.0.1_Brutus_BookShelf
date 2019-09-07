import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  chip: {
    margin: theme.spacing(1),
  },
}))

export default function BookCard({ book, erKaninete, setKanin }) {
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
            <Chip
              label={book.Enhj_rninger_eller_kaniner}
              onClick={() => setKanin(book.Enhj_rninger_eller_kaniner)}
              className={classes.chip}
            />

            <Chip label={book.Type_bok} className={classes.chip} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href={book.Lenke_til_boka}
          variant="contained"
          className={classes.button}
          size="small"
        >
          Lytt til {""}
          {book.Norsk_navn}
        </Button>
      </CardActions>
    </Card>
  )
}
