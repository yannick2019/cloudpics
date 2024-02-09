import Marquee from "react-marquee-slider";

export default function SliderComponent() {
  const imagesForSlider = [
    "https://images.unsplash.com/photo-1707173513949-da36b73461ad?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1695028377588-4c496ed315ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?w=1800&t=st=1707263726~exp=1707264326~hmac=b8547a47bdf2f31bbda08e25838e638a5d5ec950a193451d0c0f2a2f804c04a3",
    "https://img.freepik.com/free-photo/high-angle-couple-hiking-trip_23-2150343062.jpg?w=1800&t=st=1707263772~exp=1707264372~hmac=e9ff720ea35c271e0efacc2d0b2a6d7c80d349cd8779af10f7fc2fe1db672182",
    "https://img.freepik.com/free-photo/dynamic-portrait-young-sportive-woman-training-running-isolated-purple-background-neon-with-mixed-lights_155003-45929.jpg?w=1800&t=st=1707263802~exp=1707264402~hmac=b906d33c19279a06d26f0f0c2ce09192d0f6edef6508eea442140e4123d54d28",
    "https://img.freepik.com/free-photo/expressive-bearded-man-wearing-shirt_273609-5928.jpg?w=1800&t=st=1707263836~exp=1707264436~hmac=e383c5f33267cea6d0cf6c9c554000986247950ea7c2abbbf2e061982008c52b",
    "https://img.freepik.com/free-photo/questioned-indignant-pleasant-looking-brunette-woman-with-hands-hesitant-gesture-wears-striped-casual-sweater_273609-17554.jpg?w=1800&t=st=1707263855~exp=1707264455~hmac=f26eac75450697bcea9b025d8f58073ac9eee9eb56ae2797075d878489021305",
  ];

  return (
    <div className="hidden md:block md:flex md:flex-row md:items-center md:gap-2 md:mt-[100px]">
      <Marquee
        velocity={25}
        direction="rtl"
        scatterRandomly={false}
        resetAfterTries={200}
        onInit={() => {}}
        onFinish={() => {}}
      >
        {imagesForSlider.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt="image"
              width={200}
              className="mr-4 cursor-pointer"
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
