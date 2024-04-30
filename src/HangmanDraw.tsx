const Head = (
  <div
    key="head"
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "21px",
      right: "-25px",
    }}
  />
);

const Body = (
  <div
    key="body"
    style={{
      width: "10px",
      height: "90px",
      position: "absolute",
      top: "70px",
      right: 0,
      backgroundColor: "black",
    }}
  />
);

const RightArm = (
  <div
    key="rightArm"
    style={{
      width: "80px",
      height: "10px",
      position: "absolute",
      top: "100px",
      right: "-73px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
      backgroundColor: "black",
    }}
  />
);

const LeftArm = (
  <div
    key="leftArm"
    style={{
      width: "80px",
      height: "10px",
      position: "absolute",
      top: "100px",
      right: "3px",
      rotate: "30deg",
      transformOrigin: "right bottom",
      backgroundColor: "black",
    }}
  />
);

const RightLeg = (
  <div
    key="rightLeg"
    style={{
      width: "80px",
      height: "10px",
      position: "absolute",
      top: "145px",
      right: "-70px",
      rotate: "60deg",
      transformOrigin: "left bottom",
      backgroundColor: "black",
    }}
  />
);

const LeftLeg = (
  <div
    key="leftLeg"
    style={{
      width: "80px",
      height: "10px",
      position: "absolute",
      top: "145px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
      backgroundColor: "black",
    }}
  />
);

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type HangmanDrawProps = {
  incorrectLength: number;
};

export default function HangmanDraw({ incorrectLength }: HangmanDrawProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {BodyParts.slice(0, incorrectLength)}
      <div
        style={{
          width: "10px",
          height: "30px",
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "black",
        }}
      />
      <div
        style={{
          width: "120px",
          height: "10px",
          marginLeft: "120px",
          backgroundColor: "black",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "350px",
          marginLeft: "120px",
          backgroundColor: "black",
        }}
      />
      <div
        style={{
          width: "250px",
          height: "10px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
}
