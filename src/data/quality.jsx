import excellent from "../assets/images/excellent.png";
import good from "../assets/images/good.png";
import average from "../assets/images/average.png";
import poor from "../assets/images/poor.png";
import severe from "../assets/images/severe.png";

const quality = [
    {
        id: 1,
        imageLink: excellent,  // Replace with actual image URL
        title: "Excellent",
        class: "Class A",
        subtitle: "Crystal clear and pure, ideal for drinking and bathing."
      },
      {
        id: 2,
        imageLink: good,  // Replace with actual image URL
        title: "Good",
        class: "Class B",
        subtitle: "Safe to use, requires minimal treatment."
      },
      {
        id: 3,
        imageLink: average,  // Replace with actual image URL
        title: "Average",
        class: "Class C",
        subtitle: "Acceptable quality, may need moderate treatment."
      },
      {
        id: 4,
        imageLink: poor,  // Replace with actual image URL
        title: "Poor",
        class: "Class D",
        subtitle: "Poor quality, requires treatment before use for drinking or bathing."
      },
      {
        id: 5,
        imageLink: severe,  // Replace with actual image URL
        title: "Severe",
        class: "Class E",
        subtitle: "Hazardous quality, unsuitable for use without extensive treatment."
      }
];

export default quality