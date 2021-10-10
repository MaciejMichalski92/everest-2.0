export interface TopRestaurantsTypes {
  arrayOfRestaurants: Array<{
    title: string;
    restaurantMaxSpace: string;
    imageSrc: string;
    restaurantType: string;
    link: string;
  }>;
  background?: string;
  title: string;
}

export interface StyledTopRestaurantsProps {
  background?: string;
}
