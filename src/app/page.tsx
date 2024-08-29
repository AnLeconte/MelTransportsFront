import SearchItineraireForm from "./searchItineraireForm/SearchItineraireForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/45e1/635a/f6ef3ec08c19da482c85c94f437e960a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amfVXvxli8PWMseYuFcYMCvWi77djsLkta5pbT3UA6ju9gTOgOONRZjNp2dzXqCxYpV2v-h~-QWAl5BNuXGhGcDqCmXV17kILMdaRpiuDRWdHXpSXYdXOeaqjXn3crkhXy6jKQ3ywCDiBOxKtwva2ZAOijtLhNhAmu-AQiMQY0-W3BjAjd6exw3iqg9lsSKjxiXuaITJ7epCcVwE58P8v311mEo4satZN4jFZwaEkWbPBc2NTubX4hmS5Jh7i8R8tASqsuZ-pglAoHF7CEATbHY2IvjiZ5~03lgxwAKvBdPkulGZ1-VvJi00kZlnCwQsd-Y3mJqA88zCHM4TQi8GMw__"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="relative z-10 p-4 flex justify-end items-center">
          <SearchItineraireForm />
        </div>
      </div>
    </div>
  );
}

