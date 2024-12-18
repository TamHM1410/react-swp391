import React from "react";

export default function CTA() {
  return (
    <section className="py-12 md:py-24 flex justify-center">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start">
          <span className="flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary">
            Hãy cùng chúng tôi <br className="hidden sm:inline" /> tạo ra điều
            tuyệt vời.
          </span>
          <button className="btn btn-secondary rounded-full sm:btn-lg">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </section>
  );
}
