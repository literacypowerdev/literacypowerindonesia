import React from "react";

export interface ProjectBodyProps {
  type?: "Sebelum" | "Sesudah";
  name?: String;
  text: string;
  dokumentasi: string;
}

export default function ProjectBody(props: ProjectBodyProps) {
  const { type, name, text, dokumentasi } = props;
  console.log(text)

  return (
    <>
      <div className="w-full">
        {dokumentasi == "" ? (
          ""
        ) : (
          <img
            className={`rounded-[10px] w-full md:w-[300px] md:h-[300px] object-cover ${type == "Sebelum" ? "float-left" : "float-right"
              } ${type == "Sebelum" ? "mr-4" : "ml-4"} mb-1`}
            src={`http://localhost:4500/images/${dokumentasi}`}
            alt="Project Documentation"
          />
        )}
        <h2 className="font-ptserif font-bold text-base text-main-orange">
          {type ? type : name}
        </h2>
        {/* {items.map((p: any) => {
          return (
            <p key="#" className="font-pt-serif text-main-blue text-justify mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              purus dui, varius non quam in, viverra luctus lorem. Phasellus
              tincidunt placerat lectus sit amet venenatis. Maecenas tempus risus
              ac lectus laoreet, et laoreet massa ultricies. Aliquam nec odio ac
              arcu auctor rutrum. Etiam nec nibh eros. Nulla enim ante, vulputate
              eu diam quis, aliquet feugiat diam. Nullam auctor egestas arcu,
              suscipit ultrices nunc porta id.
            </p>
          );
        })} */}
        <p className="font-ptserif text-justify">{text}</p>
      </div>
    </>
  );
}
