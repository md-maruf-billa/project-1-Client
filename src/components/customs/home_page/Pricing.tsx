import { ShieldCheck } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonStyle:
        "border border-[#FFE492] text-[#FFE492] bg-[#4F9CF9] hover:bg-[#6eb4fc]",
    },
    {
      title: "Personal",
      price: "$11.99",
      highlight: true,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonStyle:
        "border border-[#FFE492] text-[#FFE492] bg-[#4F9CF9] hover:bg-[#6eb4fc]",
    },
    {
      title: "Organization",
      price: "$49.99",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      buttonStyle:
        "border border-[#FFE492] text-[#FFE492]  bg-[#4F9CF9] hover:bg-[#6eb4fc]",
    },
  ];

  return (
    <div className="py-16 px-10 container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-[#043873]">
        Choose <span className="text-yellow-500">Your Plan</span>
      </h2>
      <p className="text-[#043873] max-w-2xl mx-auto mb-12">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md ${
              plan.highlight
                ? "bg-[#043873]  text-white scale-105 hover:bg-white hover:text-[#043873] border hover:border-[#FFE492]"
                : "border border-[#FFE492] bg-white text-[#043873]  hover:bg-[#043873] hover:text-white scale-105"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-[#FFE492] mb-4">
              {plan.price}
            </p>
            <ul className="text-left space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FFE492] text-xl ">
                    <ShieldCheck />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${plan.buttonStyle}`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
