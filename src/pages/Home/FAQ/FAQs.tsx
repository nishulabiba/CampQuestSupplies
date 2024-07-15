import Title from "../../../utils/Title";

const FAQs = () => {
  return (
    <>
    <Title heading="FAQs" subHeading="You may ask...."/>
    <div className="flex md:flex-row flex-col-reverse gap-10 mt-20 py-5 justify-around text-slate-500 items-center">
      <div className="w-1/2 ps-5">
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What services do you offer?
          </div>
          <div className="collapse-content">
            <p>We offer a wide range of camping gear and equipment, including tents, sleeping bags, backpacks, and more. Check out our products page for a full list of items.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I track my order?
          </div>
          <div className="collapse-content">
            <p>Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order through our shipping partner's website.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>We accept returns within 30 days of purchase. Items must be unused and in their original packaging. For more details, visit our return policy page.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>Yes, we offer international shipping to many countries. Please enter your shipping address at checkout to see if we deliver to your location.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I contact customer support?
          </div>
          <div className="collapse-content">
            <p>You can reach our customer support team by email at support@example.com or through our contact form on the website. We are here to help you Monday through Friday from 9 AM to 5 PM.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I change my order after placing it?
          </div>
          <div className="collapse-content">
            <p>Once an order is placed, we cannot guarantee changes. Please contact our support team as soon as possible if you need to modify your order.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do you offer discounts for bulk purchases?
          </div>
          <div className="collapse-content">
            <p>Yes, we offer discounts for bulk purchases. Please contact us for more information about our bulk purchase pricing.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>We accept various payment methods including credit/debit cards, PayPal, and other secure payment options.</p>
          </div>
        </div>
      </div>
      <div className="md:w-[400px]">
        <img className=" md:w-[400px] scale-125 " src="./h.png" alt="FAQ Illustration" />
      </div>
    </div>
    </>
  );
};

export default FAQs;
