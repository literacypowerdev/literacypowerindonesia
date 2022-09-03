import type { NextPage } from "next";
import Link from "next/link";
import Button from "../components/atoms/Button";
import Navbar from "../components/organisms/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <p className="text-title1 font-bold text-main-green font-ptserif">
        OUR PROJECTS
      </p>
      <p className="text-title2 font-bold text-main-orange font-ptserif">
        Visi
      </p>
      <p className="text-title3 font-bold text-main-orange font-ptserif">
        Cikarang
      </p>
      <p className="text-base font-medium text-main-orange font-ptserif">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque ut,
        voluptate reprehenderit ipsa necessitatibus assumenda aliquid suscipit
        cupiditate rerum, accusamus doloremque quam ducimus veniam quasi fugit.
        Porro quae rem unde in? Odit laborum eos sint harum magni autem
        obcaecati recusandae, amet quaerat dolore enim. Aut atque harum suscipit
        animi nulla praesentium quasi accusamus rem repudiandae? Sapiente
        excepturi, expedita laboriosam ipsam, odio iusto aspernatur quo veniam
        quae nihil ipsum ab repellat, provident blanditiis. Natus totam officiis
        ratione, repellendus deleniti repellat doloremque rem sapiente.
        Distinctio, deserunt voluptatibus. Facere eum maiores corporis unde
        nihil temporibus itaque! Modi velit animi eligendi nobis vel?
      </p>
      <div className="w-32">
        <Button text="Apply" border="full" size="normal" />
      </div>
      <Link href="/test">
        <div className="w-32">
          <Button link text="Apply" border="rectangle" size="large" />
        </div>
      </Link>
    </>
  );
};

export default Home;
