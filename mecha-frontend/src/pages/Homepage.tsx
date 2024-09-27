import { Button } from "@mui/material";
import FeaturedProductCard from "../components/FeaturedProductCard";
import ServiceCard from "../components/ServiceCard";

const HomePage = () => {
  return (
    <div>
      <img src="/mechaBanner.png" alt="" />
      <div className="md:flex md:justify-between md:my-10 md:mx-6 my-4 space-y-2">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex flex-col mb-10 items-center">
        <FeaturedProductCard />
        <Button variant="contained" className="max-w-32">
          See more
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
