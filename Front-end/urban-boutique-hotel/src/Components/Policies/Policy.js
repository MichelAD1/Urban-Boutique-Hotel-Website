import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
//APIs
import GetPolicies from "../../api-client/Policies/GetPolicies";

const Policy = () => {
  const [loading, setLoading] = useState(true);
  const [policies, setPolicies] = useState([]);

  //Api handler
  const {
    status,
    error,
    data: policyData,
  } = useQuery(["policydata"], GetPolicies, {
    staleTime: 18000000, // 5 hours
  });
  useEffect(() => {
    if (status === "success" && policyData) {
      setPolicies(policyData);
      setLoading(false);
    }
  }, [policyData, status]);

  return (
    <>
      {loading ? (
        <div className="buffer-space">
          <div className="buffer-loader home"></div>
        </div>
      ) : (
        <div className="policies-container">
          <h1>urban boutique hotel privacy policy</h1>
          <p>Welcome to Urban Boutique Hotel</p>
          <p>Last Updated: March 14, 2023.</p>
          <p>
            Located in the heart of Vienna, Urban Boutique Hotel offers
            luxurious accommodations and unparalleled service to our guests. Our
            boutique hotel boasts a prime location for exploring the city's rich
            history and culture, and is perfect for both leisure and business
            travelers. This privacy policy outlines how we collect, use, and
            share information on or in connection with our hotel services.
          </p>
          <p>
            {" "}
            If you have any questions or concerns, please don't hesitate to
            contact us using the information provided in the "Contact Us"
            section. When we refer to "Urban Boutique Hotel" (or any similar
            terms like "we" or "us") in this privacy policy, we mean the entity
            that controls and is responsible for your information. This includes
            all subsidiaries that help provide and support our hotel services.
          </p>
          <p>
            Thank you for choosing Urban Boutique Hotel as your destination in
            Vienna. We look forward to providing you with a memorable and
            comfortable stay.
          </p>
          {policies.map((policy) => (
            <div key={policy.id}>
              <h3 className="policies-title">{policy.title}</h3>
              <p>{policy.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Policy;
