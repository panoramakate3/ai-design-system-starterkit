"use client"

export function Statistics() {
  const stats = [
    {
      value: "40 Million",
      label: "Bookmarks saved",
    },
    {
      value: "100k",
      label: "Monthly Active Users",
    },
    {
      value: "2.1 Billion",
      label: "Cached Pages",
    },
    {
      value: "400k",
      label: "Monthly Images Served",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
      <div className="container px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-3xl">
            Everything You Need to Scale Your EV Infrastructure
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            From hardware to software, we provide a complete ecosystem for modern EV charging.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold">{stat.value}</div>
              <div className="text-sm md:text-base text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
