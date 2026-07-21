# **Business Requirement Plan**

## **AminGrow**

**Market:** Ghana  
**Prepared:** July 2026

## ---

**Table of Contents**

1. Introduction  
2. The Problem  
3. The Solution  
4. Target Market  
5. Scope of Animals (Phase One)  
6. Revenue Model  
7. Livestock Assurance Policy (Sickness & Death)  
8. User Roles  
9. Platform Requirements  
   1. Landing Page  
   2. Client Platform  
   3. Admin Platform  
10. Technology Approach  
11. Core Information the System Must Track  
12. Quality & Reliability Expectations  
13. Assumptions  
14. Decisions Still Needed  
15. Recommended Next Steps

## ---

**1\. Introduction**

This document outlines the business rationale, scope, and requirements for a proposed AnimGrow platform in Ghana. It is intended to guide the design and development of the system, and to serve as a shared reference point between business and technical stakeholders.

## ---

**2\. The Problem**

Meat sold in most open markets in Ghana passes through very little oversight before it reaches the consumer. A buyer generally has no way of knowing how the animal was raised, what it was fed, whether it received any veterinary attention, or even whether it died of natural causes or disease before being brought to market. In many cases, animals sold for meat are picked up from unknown sources and sold without any record of their history.  
For most people, this uncertainty is simply an accepted part of everyday life. But for a growing segment of financially capable consumers, it represents a real and avoidable health risk — one they would gladly pay to eliminate if a credible alternative existed. Today, no such alternative exists in the Ghanaian market. There is no service that allows a consumer to know, with confidence, the full history of the animal that ends up on their plate. This gap is the opportunity the AnimGrow intends to address.

## ---

**3\. The Solution**

The proposed business introduces a livestock care-as-a-service model built around transparency and convenience. Rather than buying meat of unknown origin at the point of sale, a client instead purchases a young goat or sheep directly from the company and pairs it with a feeding plan suited to their budget and timeline. From that point forward, the company takes full responsibility for the animal's day-to-day care on the client's behalf.  
The client is not required to own or manage any farming infrastructure, hire labour, or have any farming knowledge. Instead, they are kept continuously informed about their animal through a digital platform, and can request a live video call at any time to see it for themselves. This turns what is normally an opaque, trust-based transaction into a transparent, verifiable one.  
In short, the solution is built on four pillars:

* **Traceability** — the client knows exactly which animal is theirs, its age, and its full care history.  
* **Health assurance** — ongoing monitoring and reporting remove the guesswork of buying meat from unknown sources.  
* **Convenience** — the client outsources the entire burden of rearing: infrastructure, labour, feeding, and cleaning.  
* **Transparency** — live video access lets the client verify the animal's condition themselves, at any time.

When the client is satisfied that the animal is ready, they can collect it themselves, or ask the company to release it, deliver it, or have it slaughtered and prepared for delivery. This model directly resolves the problem described above: it replaces an anonymous, untraceable supply chain with one the client can watch unfold, animal by animal, from a young age to the point of release.

## ---

**4\. Target Market**

The service is aimed at financially capable individuals in Ghana who are willing to pay a premium for verified quality, transparency, and the convenience of not having to manage the process themselves. This is a deliberate positioning choice: the cost of individualised animal care (dedicated feeding plans, health monitoring, live video access) is not suited to mass-market pricing, so the business is built around a smaller number of higher-value clients rather than high-volume, low-margin sales.  
The current scope is limited to the Ghanaian market.

---

5\. Scope of Animals (Phase One)  
For the initial launch, the service will cover **goats and sheep only**. These species were chosen as the starting point because the underlying farm infrastructure already exists for them. Cattle, pigs, and poultry are not included in this phase but may be considered for future expansion once the model has been proven.

## ---

**6\. Revenue Model**

The platform is designed around five distinct points of payment, each tied to a specific stage of the client's journey with their animal:

| Revenue Stream | What It Covers | When It's Charged |
| :---- | :---- | :---- |
| Animal Purchase | Client buys a kid goat or sheep, listed with its age, price, and photos | At purchase |
| Feeding Plan | Recurring package (daily, weekly, or monthly) that funds the animal's ongoing care | At purchase; recurring on renewal |
| Release Fee | Fixed fee covering the company's custodial and rearing service, charged when the animal is released to the client | At release request |
| Delivery Fee | Fulfilled through a third-party logistics partner | At delivery request |
| Butcher / Dressing Fee | Slaughter and preparation of the animal before delivery or pickup | At service request |

*Table 1: Revenue streams and billing points.*  
Each of these five streams is designed to correspond to a genuine service the client is choosing to use, rather than a bundled or hidden cost.

## ---

**7\. Livestock Assurance Policy (Sickness & Death)**

Because the company is taking on full responsibility for another person's animal, it needs a clear and fair policy for what happens if something goes wrong — one that is communicated to clients honestly and up front, not discovered after the fact.  
**If an animal becomes sick:** it is logged by farm or veterinary staff and reported to the client through their dashboard as soon as it is identified, so the client is never kept in the dark about their animal's condition.  
**If the animal dies (standard case):**

* Only the amount the client paid for the **animal itself** is refundable — feeding costs already paid are not, since that feed has already been consumed.  
* The company provides a **replacement kid animal** at no extra purchase cost.  
* The company continues covering feeding costs until the replacement reaches the stage the original animal had reached.  
* From that point, the client's feeding plan resumes as normal.

**If the client needs the animal immediately and it has died:** a standard replacement kid would not meet the client's urgent need. In this case, the company and client come to a direct agreement, drawing on an equivalent animal already available in the company's existing stock.  
*This policy — which might be formalised as a "Livestock Assurance Policy" in the platform's terms of service — is likely to be the single most sensitive part of the client relationship, since it deals directly with loss and compensation. It is strongly recommended that the final wording be reviewed by someone with legal or consumer-protection expertise before launch, and that clients actively acknowledge it before completing a purchase.*

## ---

**8\. User Roles**

The platform serves three broad groups of people, each with a different relationship to the business:

| Role | Where They Operate | What They Do |
| :---- | :---- | :---- |
| Client | Client Platform | Purchases animals and feeding plans, monitors condition, requests video calls, release, delivery, and butcher service |
| Farm Attendant | Admin Platform | Logs daily feeding and cleaning activity, flags anything unusual |
| Veterinary Officer | Admin Platform | Confirms diagnoses and updates an animal's health status |
| Customer Support / Account Manager | Admin Platform | Handles client communication and dispute resolution, including replacement negotiations |
| Admin / Owner | Admin Platform | Full oversight of the system, finances, and staff |
| Visitor | Landing Page | Learns about the service and converts into a client by signing up |

*Table 2: Proposed user roles (staff structure pending confirmation with the business owner — see Section 14).*

## ---

**9\. Platform Requirements**

The system consists of three components, each serving a different audience.

### **9a. Landing Page**

The landing page is the public face of the business and the first point of contact for anyone discovering the service. It needs to build enough trust that a visitor is willing to pay for an animal they will never physically see until they choose to. It should include:

* A clear explanation of the company's value proposition around traceability and health assurance  
* A step-by-step walkthrough of how the service works: buy an animal → choose a feeding plan → monitor it → release, deliver, or have it prepared  
* A preview of currently available animals, with age and price  
* Trust-building content: farm photographs, an explanation of hygiene and care practices, and client testimonials where available  
* Clear, prominent calls-to-action to sign up or log in  
* Straightforward contact information  
* Strong search engine visibility and smooth performance on mobile devices, since this is how most visitors are likely to arrive

### **9b. Client Platform**

The client platform is where the relationship between the client and their animal plays out, and the part of the system clients will return to most often.  
**Account & Profile**

* Sign up and log in using a phone number, the standard for most Ghanaian users  
* Manage contact and delivery details

**Buying an Animal & Feeding Plan**

* Browse available kid animals, each listed with age, price, and photos  
* Purchase an animal via Mobile Money or card  
* Choose a feeding plan (daily, weekly, or monthly) for the animal  
* View, renew, or upgrade the active feeding plan at any time

**My Animals Dashboard**

* A list of every animal the client currently owns (a client may own more than one)  
* A full profile per animal: health status and history, feeding plan status, growth and age updates, and photo/video updates from farm staff  
* Request a live video call to see the animal directly  
* Request release, delivery (via third-party logistics), or butcher/dressing service, each carrying the applicable fee described in Section 6

**Payments & Notifications**

* Full payment history and receipts  
* Notifications — in-app and, where appropriate, SMS or push — covering health alerts, feeding plan changes, video call confirmations, and request status

**Support**

* A direct channel to reach the company with questions or concerns, including sensitive conversations arising under the Livestock Assurance Policy

### **9c. Admin Platform**

The admin platform is the operational backbone of the business — the system staff use to run the farm and manage clients day to day.  
**Client & Order Management**

* View and manage client accounts  
* View every purchase, feeding plan, and active order in the system

**Animal & Inventory Management**

* Add and update animal listings — age, price, photos, availability  
* Track full farm inventory, including unassigned stock kept in reserve for replacements  
* Assign specific animals to specific clients

**Health & Care Logging**

* Farm attendants log daily feeding and cleaning activity per animal  
* Veterinary officers log health status changes, diagnoses, and confirmed deaths  
* A recorded death event triggers the replacement process described in Section 7

**Replacement & Dispute Handling**

* Issue a replacement animal and automatically carry over feeding progress from the original  
* Record manually negotiated agreements for urgent replacement cases

**Video Calls, Release, Delivery & Butcher Requests**

* Schedule and manage client-requested live video calls  
* Process release requests  
* Coordinate delivery with third-party logistics  
* Process butcher/dressing requests

**Staff Management & Reporting**

* Manage staff accounts and role-based permissions  
* Financial reporting across all five revenue streams  
* Operational reporting — feeding compliance, health incidents, mortality rate

## ---

**10\. Technology Approach**

The platform will be built using a modern, well-supported technology stack suited to the needs of each part of the system:

| Component | Technology |
| :---- | :---- |
| Landing Page | Next.js |
| Client Dashboard | React (Vite) |
| Admin Dashboard | React (Vite) |
| Backend | Python (e.g. FastAPI or Django REST Framework) |
| Database | PostgreSQL (recommended) |

*Table 3: Core technology stack.*  
Two areas will require third-party integration rather than being built from scratch:

* **Live video calls** — mobile video call  
* **Payments** — a gateway supporting Ghanaian Mobile Money and card payments  
* **SMS notifications** — a local provider such as Africa's Talking

The landing page (Next.js) is well suited to public marketing content, offering strong search visibility and fast load times. The client and admin dashboards (React \+ Vite) are separate applications but can share design and component patterns where their needs overlap — animal profiles, health logs, and notifications, for example.

## ---

**11\. Core Information the System Must Track**

Underlying all three platforms is a shared set of information the system needs to keep track of consistently:

1. **Clients** — identity and contact details  
2. **Staff** — identity, role, and permissions  
3. **Animals** — type, age, price, current status, and ownership  
4. **Feeding Plans** — tier, price, and the animal they're tied to  
5. **Health Logs** — every recorded update to an animal's condition  
6. **Orders** — every purchase, release, delivery, and butcher request  
7. **Replacement Records** — documenting any death and the replacement issued, including feeding progress carried over  
8. **Payments** — every transaction, tied back to the client and order it belongs to  
9. **Video Calls** — requested time, schedule, and the staff member responsible

*These categories are not meant to be exhaustive — they are the foundation a technical team would build on when designing the actual database.*

## ---

**12\. Quality & Reliability Expectations**

* **Security** — client and payment information must be encrypted both in transit and at rest, with staff access restricted according to role  
* **Reliability** — health and feeding records, once logged, must never be at risk of loss; the backend needs a dependable backup strategy  
* **Performance on mobile** — many clients will access the platform primarily from phones, sometimes on slower connections, so the client experience should perform well on modest devices  
* **Legal compliance** — the terms of service, especially the Livestock Assurance Policy, should be reviewed by someone with appropriate legal expertise before launch  
* **Scalability** — the backend should be able to support growth in animal inventory and client base without a major rebuild

## ---

**13\. Assumptions**

* Farm infrastructure required to raise the animals already exists and is not part of this project's scope  
* Delivery will be handled through a third-party logistics partner rather than built in-house  
* Payments are limited to Ghanaian methods for this first phase, primarily Mobile Money, with no support yet for international clients or multiple currencies  
* Live video calls are genuine, real-time calls to the farm, requiring staff to be available to conduct them  
* Clients can own and manage more than one animal under a single account  
* Animals covered in this first phase are limited to goats and sheep

## ---

**14\. Decisions Still Needed**

1. **Staff roles** — the exact list of roles and their specific permissions still needs to be confirmed with the business owner  
2. **Notifications** — should health and feeding notifications be sent automatically by the system, or reviewed and sent manually by staff?  
3. **Live video calls** — should calls be scheduled in advance by the client, or made available on demand? The business owner has indicated a preference for eventually supporting both, but a starting point is needed for the first version  
4. **MVP phasing** — should the landing page, client platform, and admin platform be built and launched together, or released in phases?  
5. **Legal review** — the Livestock Assurance Policy (Section 7\) requires formal legal review before it can be presented to clients with confidence  
6. **Diaspora clients** — out of scope for this phase, but identified as a strong candidate for future expansion once the core Ghanaian market is established

## ---

**15\. Recommended Next Steps**

1. Resolve the open decisions listed in Section 14, since several materially affect what gets built first  
2. Separate what belongs in an initial minimum viable version from what can wait for a second phase — live video calls and full operational reporting are strong candidates for a later phase if timelines are tight  
3. Produce wireframes and user flows for all three platforms  
4. Finalise the technical architecture in more detail, including API design and database schema  
5. Draft the client-facing terms of service, with particular care given to the Livestock Assurance Policy in Section 7