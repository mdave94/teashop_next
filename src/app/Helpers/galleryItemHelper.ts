export type GalleryItem = {
  id?: number;
  name: string;
  picturePath: string;
  text: string;
  packagePrices: PackagePrice[];
};

export type PackagePrice = {
  package: string;
  price: string;
};
