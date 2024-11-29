import React, {useState} from "react";

const DsaTrackerList =()=> {
    const [trackerList, setTrackerList] = useState([
    {
        title: "Monday",
        progress: 0,
        subsections: [
            { subtitle: "Arms", completed: false },
            { subtitle: "10.000 Steps", completed: false },
            { subtitle: "Drank enough water", completed: false },
        ],
    },
    {
        title: "Tuesday",
        progress: 0,
        subsections: [
            { subtitle: "Legs", completed: false },
            { subtitle: "10.000 Steps", completed: false },
            { subtitle:  "Drank enough water", completed: false },
        ],
    },
    {
        title: "Wednesday",
        progress: 0,
        subsections: [
            { subtitle: "Core", completed: false },
            { subtitle: "10.000 Steps", completed: false },
            { subtitle:  "Drank enough water", completed: false },
        ],
    },
    {
        title: "Thursday",
        progress: 0,
        subsections: [
            { subtitle: "Rest", completed: false },
            { subtitle: "10.000 Steps", completed: false },
            { subtitle:  "Drank enough water", completed: false },
        ],
    },
    {
        title: "Friday",
        progress: 0,
        subsections: [
            { subtitle: "Upper/Core", completed: false },
            { subtitle: "10.000 Steps", completed: false },
            { subtitle:  "Drank enough water", completed: false },
        ],
    },
    {
        title: "Saturday",
        progress: 0,
        subsections: [
            { subtitle: "Full boday", completed: false },
            { subtitle: "10.000 Steps", completed: false },
            { subtitle:  "Drank enough water", completed: false },
        ],
    },
    {
        title: "Sunday",
        progress: 0,
        subsections: [
            { subtitle: "Lower", completed: false },
            { subtitle: "10.000 Steps", completed: false },
            { subtitle:  "Drank enough water", completed: false },
        ],
    },
]);

const toggleCompletion = (dayIndex, subIndex) => {
    const newTrackerList = [...trackerList];
    newTrackerList[dayIndex].subsections[subIndex].completed = !newTrackerList[dayIndex].subsections[subIndex].completed;

    const completedSubsections = newTrackerList[dayIndex].subsections.filter(sub => sub.completed).length;
    newTrackerList[dayIndex].progress = (completedSubsections / newTrackerList[dayIndex].subsections.length) * 100;
    
    setTrackerList(newTrackerList); 
  };

  return (
    <div>
      {trackerList.map((day, dayIndex) => (
        <div key={dayIndex}>
          <h2>{day.title}</h2>
          <div>Progress: {day.progress}%</div>
          <ul>
            {day.subsections.map((subsection, subIndex) => (
              <li key={subIndex}>
                <input
                  type="checkbox"
                  checked={subsection.completed}
                  onChange={() => toggleCompletion(dayIndex, subIndex)}
                />
                {subsection.subtitle}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

};

export default DsaTrackerList;