import { Estate, ListingFilters } from "./../interfaces";

export const filterEstatesBy = (
  estates: Array<Estate>,
  filters: ListingFilters
): Array<Estate> => {
  estates = estates
    .map(
      (estate: Estate): Estate => {
        estate.hidden = false;
        return estate;
      }
    )
    .map(
      (estate: Estate): Estate => {
        estate.hidden = false;

        if (
          estate.city.country !== filters.country &&
          filters.country !== null &&
          typeof filters.country !== "undefined"
        ) {
          estate.hidden = true;
        }

        return estate;
      }
    )
    .filter((estate: Estate): boolean => !estate.hidden)
    .map(
      (estate: Estate): Estate => {
        if (
          estate.isOnSale !== filters.onSale &&
          filters.onSale !== 2 &&
          filters.onSale !== null &&
          typeof filters.onSale !== "undefined"
        ) {
          estate.hidden = true;
        }

        return estate;
      }
    )
    .filter((estate: Estate): boolean => !estate.hidden)
    .map(
      (estate: Estate): Estate => {
        if (
          filters.maxPrice !== null &&
          typeof filters.maxPrice !== "undefined" &&
          estate.price > filters.maxPrice
        ) {
          estate.hidden = true;
        }

        return estate;
      }
    );

  return estates;
};
