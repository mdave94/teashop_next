import Image from "next/image";

type ModalCardProps = {
  CardPicture: string;
  CardText: string;
};

const ModalCard: React.FC<ModalCardProps> = ({ CardPicture, CardText }) => {
  return (
    <>
      <div className="w-[500px]   absolute flex justify-center flex-col items-center">
        <div className="bg-red-600 rounded-t-3xl w-full h-[150px] flex justify-center items-center">
          PICTURE{" "}
        </div>
        <div className="bg-white rounded-b-3xl w-full Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut volutpat ligula. Vivamus fringilla, dolor ut accumsan cursus, sapien ipsum ultricies nibh, ut malesuada velit nulla vel risus. Donec quis feugiat ante, ut maximus neque. Curabitur vitae pulvinar sapien. Etiam lobortis sollicitudin lacus interdum placerat. Quisque ante libero, dictum et eros ac, feugiat faucibus urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer mi magna, lacinia in tortor vel, varius malesuada ante. Phasellus pretium congue massa. Curabitur nec orci eu erat lobortis aliquam at et lorem">
          <div className="ml-8 mt-5  text-2xl">{CardText}</div>
          <div className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            volutpat ligula. Vivamus fringilla, dolor ut accumsan cursus, sapien
            ipsum ultricies nibh, ut malesuada velit nulla vel risus. Donec quis
            feugiat ante, ut maximus neque. Curabitur vitae pulvinar sapien.
            Etiam lobortis sollicitudin lacus interngilla, dolor ut accumsan
            cursus, sapien ipsum ultricies nibh, ut malesuada velit nulla vel
            risus. Donec quis feugiat ante, ut maximus neque. Curabitur vitae
            pulvinar sapien. Etiam lobortis sollicitudin lacus interdum
            placerat. Quisque ante libero, dictum et eros ac, feugiat faucibus
            urna. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Integer mi magna, lacinia in tortor
            vel, varius malesuada ante. Phasellus pretium congue massa.
            Curabitur nec orci eu erat lobortis aliquam at et lorem
          </div>
          <div className="">Kiszerelés</div>
          <div className="grid justify-center items-center  text-center grid-cols-[repeat(auto-fit,minmax(50px,1fr))]  ">
            <div className="hover:bg-blue-600 hover:rounded-3xl p-1 cursor-pointer ">
              30g
            </div>
            <div className="hover:bg-blue-600 hover:rounded-3xl p-1 cursor-pointer">
              50g
            </div>
            <div className="hover:bg-blue-600 hover:rounded-3xl p-1 cursor-pointer">
              100g
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="bg-green-500 mb-3 p-2 rounded-3xl text-white  ">
              3000 Ft
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
