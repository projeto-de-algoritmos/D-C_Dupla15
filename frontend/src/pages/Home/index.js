import React from 'react';
import LOGO from '../../assets/logo.png';
import { Container, Header, Logo, MovieContainer, Button, Context, MovieImage, MovieText } from './styles';
import movies from '../../assets/movies'
import Grid from '@material-ui/core/Grid';
import sampleSize from 'lodash/sampleSize'
const Home = () => {
  
  return (
    <Container>
      <Header>
        <Logo src={LOGO}/>
        <Button>Gerar filmes</Button>
      </Header>

      <Context>
        <Grid container spacing={3}>
          {sampleSize(movies, 12).map((item, index)=>(
            <Grid item sm={2} md={2} key={String(index)}> 
              <MovieContainer>
                <strong>{`${item.rating}/10`}</strong>
                <span>{item.titulo}</span>
                <MovieImage src={item.movieImage}/>
                <p>{item.descricao}</p>
              </MovieContainer>
            </Grid>
          ))}
        </Grid>
      </Context>
    </Container>
  );
}

export default Home;
