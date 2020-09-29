import axios from "axios";

const LoveData = () => {
  const getLoveData = async (firstName: string, lastName: string) => {
    const res = await axios(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${lastName}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "b27611f26cmshdf6040825f3d4ffp143cf6jsn5aa0b6dc327a",
        },
      }
    );
    return res.data;
  };

  return {
    getLoveData,
  };
};

export default LoveData;
