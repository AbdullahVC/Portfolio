"use client";
import GitHubCalendar from "react-github-calendar";

export default function GithubHeatmap() {
  const selectLastHalfYear = (contributions: any[]) => {
    const today = new Date();
    const sixMonthsAgo = new Date(today);
    sixMonthsAgo.setMonth(today.getMonth() - 6);
    return contributions.filter((day) => new Date(day.date) > sixMonthsAgo);
  };

  return (
    <div className="flex justify-center">
      {/* Asıl kart; genişliği içeriğe göre */}
      <div className="inline-block w-fit rounded-xl bg-bg p-4">
        <GitHubCalendar
          username="AbdullahVC"
          transformData={selectLastHalfYear}
          colorScheme="dark"
          blockSize={16}
          blockMargin={4}
          fontSize={14}
          theme={{
            dark: ["#0f172a", "#113b2d", "#1f6f4a", "#2ea043", "#39d353"],
          }}
        />
      </div>
    </div>
  );
}
