import { useState } from "react"

const RESTAURANTS = {
  noir: {
    id: "noir",
    name: "Library",
    tagline: "Bar & Grill",
    description:
      "An intimate dining experience where each course tells a story. Executive Chef Mara Voss draws on a decade in Copenhagen and Lyon to craft a twelve-course journey through the season's finest ingredients.",
    address: "607 W Boyd St, Norman, OK 73069",
    hours: "Sun–Thur: 11AM – 12AM\nFri–Sat: 11AM – 2AM",
    phone: "(405) 360-4258",
    heroImg:
      "https://images.unsplash.com/photo-1709548145082-04d0cde481d4?w=1600&h=900&fit=crop&auto=format",
    foodImg:
      "https://images.unsplash.com/photo-1663530761401-15eefb544889?w=900&h=700&fit=crop&auto=format",
    accent: "#3f6b4f",
    menu: [
      {
        section: "Appetizers",
        items: [
          {
            name: "House made Salsa",
            desc: "Served with chips",
            price: "$4.95",
          },
          {
            name: "Made-to-order Guacamole",
            desc: "Served with chips &amp; salsa",
            price: "$9.95",
          },
          {
            name: "Spinach Queso Dip",
            desc: "Served with chips &amp; salsa",
            price: "$10.95",
          },
          {
            name: "Roasted Garlic Hummus",
            desc: "Served with toast points &amp; carrots",
            price: "$8.95",
          },
          {
            name: "Sourdough Pretzel",
            desc: "Your choice of IPA mustard, beer cheese, or ranch · One pretzel $5.95",
            price: "$10.95",
          },
          {
            name: "Nachos — Cheese Only",
            desc: "Served with pico de gallo &amp; salsa · ½ order $5.50",
            price: "$9.95",
          },
          {
            name: "Nachos — Veggie",
            desc: "Green pepper, onion, mushrooms, tomatoes, &amp; black olives · ½ order $6.95",
            price: "$11.95",
          },
          { name: "Nachos — Chicken", desc: "½ order $7.95", price: "$13.95" },
          {
            name: "Nachos — House-smoked Pulled Pork",
            desc: "½ order $7.50",
            price: "$12.95",
          },
          {
            name: "Nachos — Homemade Pot Roast",
            desc: "½ order $7.95",
            price: "$13.95",
          },
          {
            name: "Quesadilla — Veggie",
            desc: "Cheese, green peppers, red onions, black olives, mushrooms, &amp; tomatoes",
            price: "$10.95",
          },
          {
            name: "Quesadilla — Chicken",
            desc: "Chicken, cheese, green peppers, red onions, &amp; tomatoes",
            price: "$12.95",
          },
          {
            name: "Quesadilla — House-smoked Pulled Pork",
            desc: "Pulled pork, cheese, green peppers, red onions, &amp; tomatoes",
            price: "$12.95",
          },
          {
            name: "Quesadilla — Homemade Pot Roast",
            desc: "Roast, cheese, green peppers, red onions, &amp; tomatoes",
            price: "$12.95",
          },
        ],
      },
      {
        section: "Salads &amp; Soups",
        items: [
          {
            name: "Library Salad",
            desc: "Greens, cheese, tomatoes, &amp; mushrooms · Add blackened chicken for $4",
            price: "$10.95",
          },
          {
            name: "Dinner Salad",
            desc: "Greens, cheese, tomatoes, &amp; mushrooms",
            price: "$5.95",
          },
          {
            name: "Pot Roast in a Bread Bowl",
            desc: "Chunks of roast, gravy, green beans, corn, &amp; carrots simmering in our baked sour-dough bowl",
            price: "$11.95",
          },
          {
            name: "Soup in a Bread Bowl",
            desc: "Ask your server what we have today",
            price: "$10.95",
          },
        ],
      },
      {
        section: "Burgers &amp; Sammies",
        items: [
          {
            name: "Short Rib Grilled Cheese",
            desc: "Monterrey, cheddar, caramelized onion, arugula",
            price: "$13.95",
          },
          {
            name: "Parmesan Buttered Grilled Cheese",
            desc: "Monterrey &amp; cheddar",
            price: "$10.95",
          },
          {
            name: "Mushroom Grilled Cheese",
            desc: "Wild mushroom &amp; arugula",
            price: "$11.95",
          },
          {
            name: "Library Cheeseburger",
            desc: "Angus beef, cheddar cheese, &amp; all the proper veggies",
            price: "$11.95",
          },
          {
            name: "The Onion Cheeseburger",
            desc: "Angus beef, American cheese, &amp; caramelized onion",
            price: "$11.95",
          },
          {
            name: "Mushroom Swiss Burger",
            desc: "The Swiss deserve no credit for this one",
            price: "$12.95",
          },
          {
            name: "Pot Roast Sliders",
            desc: "Topped with truffle oil mashed new potatoes &amp; onion tanglers · Does not come with chips or pickle",
            price: "$12.95",
          },
          {
            name: "House Smoked Pulled Pork Sandwich",
            desc: "Topped with slaw, pickled red onion, &amp; BBQ sauce",
            price: "$10.95",
          },
        ],
      },
      {
        section: "Pizzas",
        items: [
          {
            name: "Four Cheese",
            desc: "Blended romano, parmesan, mozzarella, &amp; provolone",
            price: "$11.95",
          },
          {
            name: "Tomato, Basil, &amp; Garlic",
            desc: "Ripe red tomatoes over fresh cut basil &amp; house-roasted garlic",
            price: "$11.95",
          },
          {
            name: "Veggie Pie",
            desc: "Black olives, red onions, mushrooms, tomatoes, &amp; green peppers",
            price: "$11.95",
          },
          {
            name: "Pepperoni",
            desc: "Generous amounts of thinly-sliced, spicy pepperoni",
            price: "$12.95",
          },
          {
            name: "Italian Sausage",
            desc: "A hearty helping of chunky, crumbled sausage",
            price: "$12.95",
          },
          {
            name: "Combo Pizza",
            desc: "Take the Veggie Pie &amp; add Italian Sausage &amp; Pepperoni",
            price: "$13.95",
          },
          {
            name: "BBQ Chicken",
            desc: "A tangy blend of chicken, bacon, cilantro, &amp; BBQ sauce",
            price: "$13.95",
          },
          {
            name: "Chicken Alfredo",
            desc: "Blackened chicken, mushrooms &amp; a very creamy alfredo sauce",
            price: "$13.95",
          },
        ],
      },
      {
        section: "Sweets",
        items: [
          {
            name: "La Baguette's Chocolate Delight",
            desc: "A la mode",
            price: "$6.95",
          },
          {
            name: "Salted Caramel Pretzel",
            desc: "Chocolate or hot caramel sauce",
            price: "$5.95",
          },
          {
            name: "Eli's New York Style Cheesecake",
            desc: "Strawberry sauce",
            price: "$5.95",
          },
        ],
      },
    ],
    menuNote:
      '10" pizzas on hand-rolled dough seasoned with olive oil, fresh herbs, & cornmeal · All burgers & sandwiches served with pickle spear, potato chips, and appropriate fixins',
  },
  volta: {
    id: "volta",
    name: "Blu",
    tagline: "Wine and Food",
    description: "",
    address: "201 S Crawford Ave, Norman, OK 73069",
    hours: "Mon–Sun, 5:30 pm – midnight",
    phone: "(212) 555-0371",
    heroImg:
      "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?w=1600&h=900&fit=crop&auto=format",
    foodImg:
      "https://images.unsplash.com/photo-1672636401339-88d7b84cb1df?w=900&h=700&fit=crop&auto=format",
    accent: "#2f6f8f",
    menu: [
      {
        section: "Antipasti",
        items: [
          {
            name: "Burrata e Prosciutto",
            desc: "Stracciatella, San Daniele, aged balsamic",
            price: "$22",
          },
          {
            name: "Bruschetta al Fuoco",
            desc: "Fire-charred tomato, basil, sea salt",
            price: "$14",
          },
        ],
      },
      {
        section: "Paste & Pizze",
        items: [
          {
            name: "Tagliatelle al Ragù",
            desc: "12-hour Bolognese, Parmigiano Reggiano",
            price: "$28",
          },
          {
            name: "Pizza Margherita DOC",
            desc: "San Marzano, fior di latte, fresh basil",
            price: "$24",
          },
          {
            name: "Cacio e Pepe",
            desc: "Tonnarelli, pecorino, Tellicherry pepper",
            price: "$26",
          },
        ],
      },
      {
        section: "Dolci",
        items: [
          {
            name: "Tiramisù della Casa",
            desc: "Mascarpone, espresso, Marsala",
            price: "$12",
          },
          {
            name: "Panna Cotta",
            desc: "Seasonal fruit compote, pistachio",
            price: "$11",
          },
        ],
      },
    ],
    menuNote:
      "À la carte · Reservations recommended but walk-ins always welcome",
  },
}

type RestaurantKey = keyof typeof RESTAURANTS
type Page = "home" | "library" | "blu" | "library-menu" | "blu-menu" | "library-apply" | "blu-apply" | "menu" | "visit"

const pageLabels: { id: Page label: string }[] = [
  { id: "home", label: "GL Dining" },
  { id: "library", label: "The Library" },
  { id: "blu", label: "Blu" },
  { id: "menu", label: "Menus" },
  { id: "visit", label: "Visit" },
]

const IMAGES = {
  group:
    "https://images.unsplash.com/photo-1709548145082-04d0cde481d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
  library:
    "https://images.unsplash.com/photo-1759373203258-fb412835de5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
  blu: "https://images.unsplash.com/photo-1580929753530-ef52238116c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
  table:
    "https://images.unsplash.com/photo-1770678724756-dc8e5123305b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
}

function Action({
  children,
  onClick,
  secondary = false,
}: {
  children: React.ReactNode
  onClick: () => void
  secondary?: boolean
}) {
  return (
    <button
      className={`min-h-11 px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${
        secondary
          ? "border border-neutral-500 bg-transparent hover:bg-neutral-100"
          : "border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function ImagePlaceholder({
  label,
  tall = false,
  hideLabel = false,
  src,
}: {
  label: string
  tall?: boolean
  hideLabel?: boolean
  src?: string
}) {
  if (src) {
    return (
      <div
        className={`image-frame relative overflow-hidden ${
          tall ? "min-h-80 md:min-h-[30rem]" : "min-h-56"
        }`}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          alt={label}
        />
      </div>
    )
  }

  return (
    <div
      className={`image-placeholder flex items-center justify-center border border-neutral-400 bg-neutral-200 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500 ${
        tall ? "min-h-80 md:min-h-[30rem]" : "min-h-56"
      }`}
      role="img"
      aria-label={label}
    >
      {!hideLabel && <span className="bg-neutral-100 px-4 py-2">{label}</span>}
    </div>
  )
}

function LocationMap({ name, address }: { name: string address: string }) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <div
      className="location-map overflow-hidden"
      aria-label={`${name} location map`}
    >
      <iframe
        className="h-64 w-full border-0"
        src={mapUrl}
        title={`Map showing ${name} at ${address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

function Header({
  page,
  setPage,
}: {
  page: Page
  setPage: (page: Page) => void
}) {
  const [open, setOpen] = useState(false)
  const go = (nextPage: Page) => {
    setPage(nextPage)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-400 bg-neutral-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <button
          className="text-left text-xl font-black uppercase tracking-tight"
          onClick={() => go("home")}
          aria-label="GL Dining home"
        >
          GL Dining
          <span className="block text-[10px] font-medium tracking-widest text-neutral-500">
            Norman, Oklahoma
          </span>
        </button>
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {pageLabels.slice(1, 3).map((item) => (
            <button
              key={item.id}
              className={`px-4 py-2 text-sm font-semibold ${
                page === item.id
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-200"
              }`}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="border border-neutral-500 px-4 py-2 text-sm font-bold md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="grid border-t border-neutral-400 bg-white p-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {pageLabels.map((item) => (
            <button
              key={item.id}
              className={`min-h-12 px-4 text-left font-semibold ${
                page === item.id
                  ? "bg-neutral-900 text-white"
                  : "border-b border-neutral-200"
              }`}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      {copy && (
        <p className="mt-5 text-base leading-7 text-neutral-600">{copy}</p>
      )}
    </div>
  )
}

function CompanyHome({ setPage }: { setPage: (page: Page) => void }) {
  return (
    <main>
      <section className="border-b border-neutral-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2 md:items-center md:px-8 md:py-20">
          <div>
            <h1 className="text-5xl font-black leading-none md:text-7xl">
              Two neighborhood restaurants. One local table.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              GL Dining brings together a casual campus favorite and a downtown
              wine bar, each with its own menu and point of view.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Action onClick={() => setPage("library")}>
                Explore The Library
              </Action>
              <Action secondary onClick={() => setPage("blu")}>
                Explore Blu
              </Action>
            </div>
          </div>
          <ImagePlaceholder
            label="An intimate GL Dining restaurant interior"
            tall
            hideLabel
            src={IMAGES.group}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Our restaurants"
          title="Choose your experience"
          copy="Each restaurant card provides the essentials first, with a direct path to its homepage."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <RestaurantCard
            restaurantKey="noir"
            onClick={() => setPage("library")}
          />
          <RestaurantCard
            restaurantKey="volta"
            onClick={() => setPage("blu")}
          />
        </div>
      </section>

      <section className="border-y border-neutral-400 bg-neutral-200">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1fr_auto] md:items-end md:px-8">
          <SectionHeading
            eyebrow="Plan ahead"
            title="Start with the practical details"
            copy="Compare locations, hours, phone numbers, and directions before choosing your table."
          />
          <Action onClick={() => setPage("visit")}>View Both Locations</Action>
        </div>
      </section>
    </main>
  )
}

function RestaurantCard({
  restaurantKey,
  onClick,
}: {
  restaurantKey: RestaurantKey
  onClick: () => void
}) {
  const restaurant = RESTAURANTS[restaurantKey]
  return (
    <article className="border border-neutral-500 bg-white p-4">
      <ImagePlaceholder
        label={`${restaurant.name} dining room`}
        src={restaurantKey === "noir" ? IMAGES.library : IMAGES.blu}
      />
      <div className="p-3 pt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
          {restaurant.tagline}
        </p>
        <h3 className="mt-2 text-3xl font-black">{restaurant.name}</h3>
        <p className="mt-3 text-neutral-600">{restaurant.address}</p>
        <button
          className="mt-6 flex w-full items-center justify-between border-t border-neutral-400 py-4 text-left font-bold"
          onClick={onClick}
        >
          View restaurant
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}

function RestaurantHome({
  restaurantKey,
  setPage,
}: {
  restaurantKey: RestaurantKey
  setPage: (page: Page) => void
}) {
  const restaurant = RESTAURANTS[restaurantKey]
  const isLibrary = restaurantKey === "noir"
  return (
    <main>
      <section className="border-b border-neutral-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              {restaurant.tagline} · Norman, OK
            </p>
            <h1 className="text-6xl font-black leading-none md:text-8xl">
              {restaurant.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              {isLibrary
                ? "A laid-back neighborhood bar and grill near campus, serving familiar favorites late into the night."
                : "Wine and food in downtown Norman, designed for an easy evening with friends."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Action
                onClick={() => setPage(isLibrary ? "library-menu" : "blu-menu")}
              >
                View Menu
              </Action>
              <Action secondary onClick={() => setPage("visit")}>
                Hours & Directions
              </Action>
            </div>
            <button
              className="mt-5 border-b border-neutral-700 pb-1 text-sm font-bold"
              onClick={() => setPage(isLibrary ? "library-apply" : "blu-apply")}
            >
              Apply to work at {restaurant.name} →
            </button>
          </div>
          <ImagePlaceholder
            label={`${restaurant.name} interior`}
            tall
            src={isLibrary ? IMAGES.library : IMAGES.blu}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <ImagePlaceholder
          label={`${restaurant.name} food and atmosphere`}
          src={isLibrary ? IMAGES.table : restaurant.foodImg}
        />
        <div>
          <SectionHeading
            eyebrow="At a glance"
            title={
              isLibrary
                ? "Good food. Cold drinks. No pretense."
                : "A downtown place to meet and unwind."
            }
            copy={
              isLibrary
                ? "The Library balances a broad comfort-food menu with the welcoming energy of a neighborhood bar."
                : "Blu centers wine, shareable plates, and a relaxed setting in the heart of downtown Norman."
            }
          />
          <dl className="mt-8 grid gap-5 border-t border-neutral-400 pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Location
              </dt>
              <dd className="mt-2 font-semibold">{restaurant.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Hours
              </dt>
              <dd className="mt-2 whitespace-pre-line font-semibold">
                {restaurant.hours}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-y border-neutral-400 bg-neutral-200">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <SectionHeading eyebrow="Featured" title="What to expect" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              isLibrary ? "Full food menu" : "Wine-forward drinks",
              isLibrary ? "Late-night hours" : "Shareable plates",
              "Central Norman location",
            ].map((item, index) => (
              <article
                key={item}
                className="border border-neutral-400 bg-white p-6"
              >
                <span className="text-xs font-bold text-neutral-500">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {isLibrary
                    ? index === 0
                      ? "Comfort-food favorites, made for lingering over with friends."
                      : index === 1
                        ? "A welcoming spot for lunch, dinner, and the late-night crowd."
                        : "Just off campus, in the heart of the neighborhood."
                    : index === 0
                      ? "A thoughtful list with an easygoing, unhurried spirit."
                      : index === 1
                        ? "Small plates and generous bites made for passing around."
                        : "A downtown gathering place, steps from Main Street."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <SectionHeading
          eyebrow="Next step"
          title={`Ready to visit ${restaurant.name}?`}
        />
        <Action onClick={() => setPage("visit")}>Get Directions</Action>
      </section>
    </main>
  )
}

function MenuAccordion({ restaurantKey }: { restaurantKey: RestaurantKey }) {
  const restaurant = RESTAURANTS[restaurantKey]
  const [open, setOpen] = useState(restaurant.menu[0].section)
  return (
    <div className="border-t border-neutral-500">
      {restaurant.menu.map((section) => {
        const expanded = section.section === open
        return (
          <section
            key={section.section}
            className="border-b border-neutral-500"
          >
            <button
              className="flex w-full items-center justify-between py-5 text-left"
              onClick={() => setOpen(expanded ? "" : section.section)}
              aria-expanded={expanded}
            >
              <span
                className="text-lg font-black"
                dangerouslySetInnerHTML={{ __html: section.section }}
              />
              <span className="text-2xl font-light" aria-hidden="true">
                {expanded ? "−" : "+"}
              </span>
            </button>
            {expanded && (
              <div className="grid gap-0 border-t border-neutral-300 pb-4 md:grid-cols-2 md:gap-x-10">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] gap-4 border-b border-neutral-300 py-4"
                  >
                    <div>
                      <h3
                        className="font-bold"
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      />
                      <p
                        className="mt-1 text-sm leading-5 text-neutral-600"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                    <p className="font-bold">{item.price}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

function MenuPage({
  restaurantKey,
  setPage,
  showRestaurantSelector = true,
}: {
  restaurantKey: RestaurantKey
  setPage: (page: Page) => void
  showRestaurantSelector?: boolean
}) {
  const restaurant = RESTAURANTS[restaurantKey]
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Food & drink"
        title={`${restaurant.name} Menu`}
        copy="Select a restaurant, then expand a category to browse items, descriptions, and prices."
      />
      {showRestaurantSelector && (
        <div className="my-8 grid grid-cols-2 border border-neutral-500 p-1">
          {(Object.keys(RESTAURANTS) as RestaurantKey[]).map((key) => (
            <button
              key={key}
              className={`min-h-12 font-bold ${
                restaurantKey === key
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-200"
              }`}
              onClick={() =>
                setPage(key === "noir" ? "library-menu" : "blu-menu")
              }
            >
              {RESTAURANTS[key].name}
            </button>
          ))}
        </div>
      )}
      <p className="mb-8 border-l-4 border-neutral-700 bg-neutral-200 p-4 text-sm leading-6">
        {restaurant.menuNote}
      </p>
      <MenuAccordion key={restaurantKey} restaurantKey={restaurantKey} />
      <div className="mt-12 flex flex-col items-start justify-between gap-5 border border-neutral-500 bg-neutral-200 p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-black">Plan your visit</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Check current hours and get directions.
          </p>
        </div>
        <Action onClick={() => setPage("visit")}>Location Details</Action>
      </div>
    </main>
  )
}

function ApplicationPage({
  restaurantKey,
  setPage,
}: {
  restaurantKey: RestaurantKey
  setPage: (page: Page) => void
}) {
  const restaurant = RESTAURANTS[restaurantKey]
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
      <button
        className="mb-8 border-b border-neutral-700 pb-1 text-sm font-bold"
        onClick={() => setPage(restaurantKey === "noir" ? "library" : "blu")}
      >
        ← Back to {restaurant.name}
      </button>
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow={`${restaurant.name} careers`}
            title={`Work with us at ${restaurant.name}`}
            copy="Tell us a little about yourself and the kind of role you are looking for. Required fields are marked with an asterisk."
          />
          <div className="mt-8 border border-neutral-400 bg-neutral-200 p-5">
            <h2 className="font-black">Before you apply</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-neutral-600">
              <li>Applications are reviewed by the restaurant team.</li>
              <li>Availability details help us find the right role.</li>
              <li>We will contact you if your experience is a match.</li>
            </ul>
          </div>
        </div>

        {submitted ? (
          <section
            className="flex min-h-96 flex-col items-start justify-center border border-neutral-500 bg-white p-8"
            aria-live="polite"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Application received
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Thank you for applying.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-neutral-600">
              Your information has been submitted to the {restaurant.name} team.
            </p>
            <div className="mt-8">
              <Action
                onClick={() =>
                  setPage(restaurantKey === "noir" ? "library" : "blu")
                }
              >
                Return to {restaurant.name}
              </Action>
            </div>
          </section>
        ) : (
          <form
            className="border border-neutral-500 bg-white p-6 md:p-8"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                First name *
                <input
                  className="min-h-12 border border-neutral-500 bg-white px-4 font-normal"
                  name="firstName"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Last name *
                <input
                  className="min-h-12 border border-neutral-500 bg-white px-4 font-normal"
                  name="lastName"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold sm:col-span-2">
                Email address *
                <input
                  className="min-h-12 border border-neutral-500 bg-white px-4 font-normal"
                  name="email"
                  type="email"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Phone number *
                <input
                  className="min-h-12 border border-neutral-500 bg-white px-4 font-normal"
                  name="phone"
                  type="tel"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Role of interest *
                <select
                  className="min-h-12 border border-neutral-500 bg-white px-4 font-normal"
                  name="role"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  <option>Front of house</option>
                  <option>Kitchen</option>
                  <option>Bar</option>
                  <option>Management</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold sm:col-span-2">
                Availability *
                <input
                  className="min-h-12 border border-neutral-500 bg-white px-4 font-normal"
                  name="availability"
                  placeholder="Example: Weeknights and weekends"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold sm:col-span-2">
                Relevant experience
                <textarea
                  className="min-h-32 border border-neutral-500 bg-white p-4 font-normal"
                  name="experience"
                  placeholder="Tell us about your restaurant or hospitality experience."
                />
              </label>
            </div>
            <label className="mt-6 flex items-start gap-3 text-sm leading-6">
              <input className="mt-1 size-4" type="checkbox" required />
              <span>
                I confirm that the information provided is accurate. *
              </span>
            </label>
            <button
              className="mt-8 min-h-12 w-full border border-neutral-900 bg-neutral-900 px-5 py-3 font-bold text-white hover:bg-neutral-700"
              type="submit"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

function VisitPage({ setPage }: { setPage: (page: Page) => void }) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Locations & contact"
          title="Find us in Norman"
          copy="Both GL Dining restaurants are centrally located. Choose a location for directions or call ahead with questions."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {(Object.keys(RESTAURANTS) as RestaurantKey[]).map((key) => {
            const restaurant = RESTAURANTS[key]
            return (
              <article key={key} className="border border-neutral-500 bg-white">
                <LocationMap
                  name={restaurant.name}
                  address={restaurant.address}
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    {restaurant.tagline}
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    {restaurant.name}
                  </h2>
                  <dl className="mt-6 grid gap-5 border-y border-neutral-300 py-6">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Address
                      </dt>
                      <dd className="mt-1 font-semibold">
                        {restaurant.address}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Hours
                      </dt>
                      <dd className="mt-1 whitespace-pre-line font-semibold">
                        {restaurant.hours}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Phone
                      </dt>
                      <dd className="mt-1 font-semibold">{restaurant.phone}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Action
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurant.address)}`,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      Get Directions
                    </Action>
                    <Action
                      secondary
                      onClick={() =>
                        setPage(key === "noir" ? "library" : "blu")
                      }
                    >
                      Restaurant Page
                    </Action>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <section className="border-y border-neutral-400 bg-neutral-200">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <SectionHeading
            eyebrow="Common questions"
            title="Before you arrive"
            copy="Space for accessibility, parking, large party, and service information."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Parking", "Accessibility", "Large parties"].map((item) => (
              <article
                key={item}
                className="border border-neutral-400 bg-white p-6"
              >
                <h3 className="font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Brief practical details will appear here.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Footer({ setPage }: { setPage: (page: Page) => void }) {
  return (
    <footer className="border-t border-neutral-500 bg-neutral-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto_auto] md:px-8">
        <div>
          <p className="text-2xl font-black uppercase">GL Dining</p>
          <p className="mt-2 max-w-xs text-sm text-neutral-400">
            Two locally owned restaurant experiences in Norman, Oklahoma.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Restaurants
          </p>
          <div className="mt-3 grid gap-2">
            <button
              className="text-left font-semibold"
              onClick={() => setPage("library")}
            >
              The Library
            </button>
            <button
              className="text-left font-semibold"
              onClick={() => setPage("blu")}
            >
              Blu
            </button>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Explore
          </p>
          <div className="mt-3 grid gap-2">
            <button
              className="text-left font-semibold"
              onClick={() => setPage("library-menu")}
            >
              The Library Menu
            </button>
            <button
              className="text-left font-semibold"
              onClick={() => setPage("blu-menu")}
            >
              Blu Menu
            </button>
            <button
              className="text-left font-semibold"
              onClick={() => setPage("visit")}
            >
              Locations
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-700 px-5 py-5 text-center text-xs text-neutral-400">
        Locally owned and happily serving Norman, Oklahoma
      </div>
    </footer>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")
  const [restaurantKey, setRestaurantKey] = useState<RestaurantKey>("noir")

  const navigate = (nextPage: Page) => {
    if (nextPage === "library") setRestaurantKey("noir")
    if (nextPage === "blu") setRestaurantKey("volta")
    if (nextPage === "library-menu" || nextPage === "library-apply")
      setRestaurantKey("noir")
    if (nextPage === "blu-menu" || nextPage === "blu-apply")
      setRestaurantKey("volta")
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const theme =
    page.startsWith("library") || (page === "menu" && restaurantKey === "noir")
      ? "library"
      : page.startsWith("blu") || (page === "menu" && restaurantKey === "volta")
        ? "blu"
        : "group"

  return (
    <div
      className="site-shell min-h-full bg-neutral-100 text-neutral-950"
      data-theme={theme}
    >
      <Header page={page} setPage={navigate} />
      {page === "home" && <CompanyHome setPage={navigate} />}
      {page === "library" && (
        <RestaurantHome restaurantKey="noir" setPage={navigate} />
      )}
      {page === "blu" && (
        <RestaurantHome restaurantKey="volta" setPage={navigate} />
      )}
      {page === "library-menu" && (
        <MenuPage
          restaurantKey="noir"
          setPage={navigate}
          showRestaurantSelector={false}
        />
      )}
      {page === "blu-menu" && (
        <MenuPage
          restaurantKey="volta"
          setPage={navigate}
          showRestaurantSelector={false}
        />
      )}
      {page === "library-apply" && (
        <ApplicationPage restaurantKey="noir" setPage={navigate} />
      )}
      {page === "blu-apply" && (
        <ApplicationPage restaurantKey="volta" setPage={navigate} />
      )}
      {page === "menu" && (
        <MenuPage restaurantKey={restaurantKey} setPage={navigate} />
      )}
      {page === "visit" && <VisitPage setPage={navigate} />}
      <Footer setPage={navigate} />
    </div>
  )
}
