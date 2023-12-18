import { useState, createContext, useEffect } from 'react';
import { movieLiked } from '@/services/moviesServices';

const MovieLikesContext = createContext();
