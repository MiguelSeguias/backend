import { Genre } from '../models/movieModels.js';
import { Age } from '../models/movieModels.js';
import { Actor } from '../models/movieModels.js';
import { Movie } from '../models/movieModels.js';
import { Movie_Actor } from '../models/movieModels.js';
import { Comment } from '../models/movieModels.js';
import { Rating } from '../models/movieModels.js';


export const createMovieControllers = (app) => {
  app.get('/genres', async (req, res) => {
    try {
      const genres = await Genre.find();
      res.json(genres);
    } catch (error) {
      res.status(403).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });

  app.post('/genre', async (req, res) => {
    try {
      const genre = new Genre(req.body);
      await genre.save();
      res.json(genre);
    } catch (error) {
      res.status(402).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });

  app.put('/genre/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const genre = await Genre.findByIdAndUpdate(id, req.body, { new: true });
      res.json(genre);
    } catch (error) {
      res.status(400).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });

  app.delete('/genre/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Genre.findByIdAndDelete(id);
      res.json({ message: 'Genre deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });
///////////////////////////////////////////////////////

  
  app.get('/ages', async (req, res) => {
    try {
      const ages = await Age.find();
      res.json(ages);
    } catch (error) {
      res.status(403).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });

  app.post('/age', async (req, res) => {
    try {
      const age = new Age(req.body);
      await age.save();
      res.json(age);
    } catch (error) {
      res.status(402).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });

  app.put('/age/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const age = await Age.findByIdAndUpdate(id, req.body, { new: true });
      res.json(age);
    } catch (error) {
      res.status(400).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });

  app.delete('/age/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Age.findByIdAndDelete(id);
      res.json({ message: 'Age deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(JSON.stringify(error, null, 2));
    }
  });

///////////////////////////////////////////////

app.get('/actors', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(403).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.post('/actor', async (req, res) => {
  try {
    const actor = new Actor(req.body);
    await actor.save();
    res.json(actor);
  } catch (error) {
    res.status(402).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.put('/actor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findByIdAndUpdate(id, req.body, { new: true });
    res.json(actor);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.delete('/actor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Actor.findByIdAndDelete(id);
    res.json({ message: 'Actor deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});


////////////////////////////////////////////////////////

app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(403).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.post('/movie', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(402).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.put('/movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.delete('/movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

///////////////////////////////////////////////////////////

app.get('/movies_actors', async (req, res) => {
  try {
    const movies_actors = await Movie_Actor.find();
    res.json(movies_actors);
  } catch (error) {
    res.status(403).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.post('/movie_actor', async (req, res) => {
  try {
    const movie_actor = new Movie_Actor(req.body);
    await movie_actor.save();
    res.json(movie_actor);
  } catch (error) {
    res.status(402).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.put('/movie_actor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie_actor = await Movie_Actor.findByIdAndUpdate(id, req.body, { new: true });
    res.json(movie_actor);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.delete('/movie_actor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Movie_Actor.findByIdAndDelete(id);
    res.json({ message: 'movie_actor deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

/////////////////////////////////////////////////

app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(403).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.post('/comment', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(402).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.put('/comment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
    res.json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.delete('/comment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

/////////////////////////////////////////////////

app.get('/ratings', async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (error) {
    res.status(403).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.post('/rating', async (req, res) => {
  try {
    const rating = new Rating(req.body);
    await rating.save();
    res.json(rating);
  } catch (error) {
    res.status(402).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.put('/rating/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await Rating.findByIdAndUpdate(id, req.body, { new: true });
    res.json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

app.delete('/rating/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Rating.findByIdAndDelete(id);
    res.json({ message: 'Rating deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(JSON.stringify(error, null, 2));
  }
});

}




