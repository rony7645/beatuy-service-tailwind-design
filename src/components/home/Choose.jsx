import React from "react";
import LeftRighImg from "../ui/LeftRighImg";

const Choose = () => {
  return (
    <>
      <section className="choose spacing bg-grey">
        <div className="container-layout">
          <LeftRighImg
            imgSrc="/public/images/promo-05.jpg"
            subHeading="Get Your Shine On"
            heading="Choose the Glamour"
            text="Nullam tempor sapien gravida donec and pretium ipsum porta integer justo an odio velna vitae auctor integer congue magna undo purus a pretium ligula rutrum magna egestas Aliquam vitae molestie at quisque sapien volutpat and justo, aliquet molestie purus efficitur ipsum Sagittis congue augue magna risus mauris volutpat and egestas magna suscipit egestas a vitae purus"
          />
        </div>
      </section>

      
      <section className="choose spacing">
        <div className="container-layout">
          <LeftRighImg
            imgSrc="/public/images/polish.png"
            subHeading="Fresh, Shiny, Bright"
            heading="Make your day shine with your shiny nails"
            text="Nullam tempor sapien gravida donec and pretium ipsum porta integer justo an odio velna vitae auctor integer congue magna undo purus a pretium ligula rutrum magna egestas Aliquam vitae molestie at quisque sapien volutpat and justo, aliquet molestie purus efficitur ipsum Sagittis congue augue magna risus mauris volutpat and egestas magna suscipit egestas a vitae purus"
            reverse={true}
          />
        </div>
      </section>
    </>
  );
};

export default Choose;
