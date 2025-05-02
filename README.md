# Pokémon Explorer Advanced
The Pokémon Explorer now includes pagination, sorting, and multi-type filtering. Users can view detailed Pokémon stats, abilities, and evolution chains, and manage favorites with persistent storage in localStorage. New features include a comparison tool, random Pokémon button, and error boundaries. Built with React and Context API,fetching data from the [PokeAPI](https://pokeapi.co/).

## Features
- **Enhanced List View**:
  - Pagination with 10, 20, or 50 items per page.
  - Sorting by ID (ascending/descending) or name (A-Z/Z-A).
  - Multi-type filtering (e.g., Fire and Dragon simultaneously).
- **Detailed View**:
  - Displays stats (HP, Attack, etc.), abilities, moves, and evolution chain for each Pokémon.
  - Accessible via `/pokemon/:id` route.
- **Favorites System**:
  - Mark Pokémon as favorites, persisted in localStorage.
  - Dedicated `/favorites` view for favorite Pokémon.
- **Advanced Features**:
  - Comparison tool to view stats of two Pokémon side-by-side.
  - Random Pokémon button to load a random detail page.
  - Error boundaries to prevent app crashes.
- **Technical**:
  - React Context API for state management.
  - Custom hooks (`usePokemon`, `useFavorites`) for reusable logic.
  - Performance optimizations with `useMemo` and `useCallback`.
  - React Router for navigation.
  - Responsive design with Tailwind CSS.
 
## Screenshots
### Desktop View
![image](https://github.com/user-attachments/assets/bcc840cf-413f-4cee-bca9-62b94e7392b5)
![image](https://github.com/user-attachments/assets/6b9e1177-5b5b-4bf0-9377-aebaae2bb822)
![image](https://github.com/user-attachments/assets/190cb3c9-0aee-4f50-ba46-c38020eb12eb)

### Mobile View
![image](https://github.com/user-attachments/assets/10002046-4fd8-4f19-a562-a8c858977d75)
![image](https://github.com/user-attachments/assets/d10ecf27-10c8-46ec-a3fa-19a349dad5d6)
![image](https://github.com/user-attachments/assets/d7cb52b7-79c8-45b5-96e4-93fe7789c927)

### Detailed View
![image](https://github.com/user-attachments/assets/d51e4325-cf54-4b97-ba7a-385429efbe27)

### Favorites View
![image](https://github.com/user-attachments/assets/d2afe684-701f-4c4c-9246-4c71256ba0b4)

### Comparison Tool
![image](https://github.com/user-attachments/assets/496cc2cc-770d-4088-903b-018ef6e031b3)


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayushvishu15/Pokemon-Explorer-Advanced.git

## Technologies
React: Functional components with Hooks.
React Router: For navigation.
Tailwind CSS: For responsive styling.
PokeAPI: Data source.
Node.js: Development runtime.

Built by Ayushvishu15
