import { GalleryItem } from "@/app/Helpers/galleryItemHelper";
export const GalleryItems: GalleryItem[] = [
  {
    id: 1,
    name: "Matcha Tea",
    picturePath: "/images/HeroPicture.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit",
    packagePrices: [
      { package: "30g", price: "1000 Ft" },
      { package: "50g", price: "1200 Ft" },
      { package: "100g", price: "1800 Ft" },
    ],
  },
  {
    id: 2,
    name: "Zöld Tea",
    picturePath: "/images/matcha.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit",
    packagePrices: [
      { package: "30g", price: "1500 Ft" },
      { package: "50g", price: "1700 Ft" },
      { package: "100g", price: "2300 Ft" },
    ],
  },
  {
    id: 2,
    name: "Fekete Tea",
    picturePath: "/images/tea1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit",
    packagePrices: [
      { package: "30g", price: "5000 Ft" },
      { package: "50g", price: "7000 Ft" },
      { package: "100g", price: "13000 Ft" },
    ],
  },
];
