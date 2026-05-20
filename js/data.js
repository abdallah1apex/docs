/* ============================================================
   QtrShoe Delivery App — Documentation content
   Block types:
     {t:'text',   x:'paragraph'}
     {t:'sub',    x:'sub-heading'}
     {t:'list',   x:['item', 'Term — definition']}
     {t:'steps',  x:['step one', 'step two']}
     {t:'img',    x:'imageN.jpg', c:'caption'}
     {t:'gallery',x:['a.jpg','b.jpg'], c:'caption'}
     {t:'note',   x:'text', v:'info|warn|tip'}
   ============================================================ */
window.DOCS = {
  app: "QtrShoe Delivery App",
  updated: "May 2026",
  roles: [

    /* ===================== DRIVER ===================== */
    {
      id: "driver",
      name: "Driver",
      tagline: "Pick up orders, deliver items, collect payments and handle returns.",
      icon: "truck",
      imgBase: "assets/img/driver/",
      intro: "This guide is for drivers using the QtrShoe Delivery app to pick up orders, deliver items, collect payments, and handle returns.",
      sections: [
        {
          id: "login", title: "Login", icon: "login",
          blocks: [
            { t: "steps", x: ["Open QtrShoe Delivery.", "Enter your Email and Password.", "Tap Sign In."] },
            { t: "note", v: "tip", x: "If you can't sign in: double-check the spelling, then contact your supervisor / ops team for an access reset." },
            { t: "img", x: "image1.jpg", c: "Sign in to QtrShoe Delivery" }
          ]
        },
        {
          id: "home", title: "Home (Overview)", icon: "home",
          blocks: [
            { t: "text", x: "After logging in, the Home screen shows key metrics such as:" },
            { t: "list", x: ["Total Orders (for the current period)", "Delivery Rate", "Collected Revenue", "Average Delivery Time"] },
            { t: "text", x: "You will also see order statuses such as:" },
            { t: "list", x: [
              "Pending — order exists but not started",
              "Assigned — assigned to you and ready to start",
              "In Transit — delivery started and you're heading to the customer",
              "Delivered — completed successfully",
              "Failed — delivery could not be completed",
              "Returned — items were taken back to the store"
            ]},
            { t: "img", x: "image2.jpg", c: "Home screen with metrics and order statuses" }
          ]
        },
        {
          id: "my-deliveries", title: "My Deliveries", icon: "package",
          blocks: [
            { t: "text", x: "This is your main working screen." },
            { t: "text", x: "You can usually view:" },
            { t: "list", x: ["Your assigned orders", "Orders in progress", "Items to return to the store (if any)"] },
            { t: "text", x: "Each order typically shows:" },
            { t: "list", x: ["Customer name", "Location / address", "Phone number", "Amount", "Status"] },
            { t: "gallery", x: ["image3.jpg", "image4.jpg", "image5.jpg"], c: "The My Deliveries working screen" }
          ]
        },
        {
          id: "delivery-flow", title: "Delivery Flow", icon: "route",
          blocks: [
            { t: "text", x: "Follow these steps from picking up an order to confirming the delivery." },
            { t: "sub", x: "Step 1 — Open the order" },
            { t: "steps", x: ["Go to My Deliveries.", "Tap the order to open it.", "Review customer details (location and phone)."] },
            { t: "img", x: "image6.jpg", c: "Order details" },
            { t: "sub", x: "Step 2 — Load items (Pickup)" },
            { t: "steps", x: ["Confirm the items you are picking up from the store.", "Select the items (use \"Select all\" if you have everything).", "Tap Confirm Pickup."] },
            { t: "gallery", x: ["image7.jpg", "image8.jpg"], c: "Confirming pickup" },
            { t: "note", v: "warn", x: "If there is a problem with an item, tap the warning icon on the product and choose a reason: Out of Stock, Damaged, Wrong Item, or Other (write a note)." },
            { t: "img", x: "image9.jpg", c: "Reporting an item problem" },
            { t: "sub", x: "Step 3 — Start delivery" },
            { t: "steps", x: ["Tap Start Delivery.", "The status changes to In Transit."] },
            { t: "note", v: "tip", x: "Navigation tip: use Open Map inside the order to navigate to the customer." },
            { t: "gallery", x: ["image10.jpg", "image11.jpg"], c: "Starting the delivery" },
            { t: "sub", x: "Change City" },
            { t: "text", x: "Use this option when the customer requests delivery to a different city. Only use it after confirming the new delivery location with the customer." },
            { t: "steps", x: ["Click Change City.", "Select the new city.", "Review the delivery fee for that city.", "Confirm the change."] },
            { t: "gallery", x: ["image12.jpg", "image13.jpg"], c: "Changing the delivery city" },
            { t: "sub", x: "Step 4 — Complete delivery (at the customer)" },
            { t: "text", x: "When you arrive, tap Complete Delivery and follow the completion steps in order." },
            { t: "img", x: "image14.jpg", c: "Completing the delivery" },
            { t: "sub", x: "4.1 — Proof Photo" },
            { t: "steps", x: ["Take a photo (proof of delivery).", "Tap Next."] },
            { t: "img", x: "image15.jpg", c: "Capturing proof of delivery" },
            { t: "sub", x: "4.2 — Products (select delivered items)" },
            { t: "text", x: "Select the items the customer actually received. You can:" },
            { t: "list", x: ["Deliver partial items (only some items delivered)", "Adjust quantities", "Remove unwanted items"] },
            { t: "text", x: "Tap Next: Payment." },
            { t: "img", x: "image16.jpg", c: "Selecting delivered products" },
            { t: "sub", x: "Exchange During Delivery" },
            { t: "text", x: "Sometimes, while delivering a new order, the customer may request an exchange for a past order. Follow the normal delivery steps, and during product selection click \"Add an exchange against a past order\". Then:" },
            { t: "steps", x: ["Select the item being returned.", "Confirm the replacement item.", "Continue the remaining delivery steps as usual."] },
            { t: "img", x: "image17.jpg", c: "Adding an exchange against a past order" },
            { t: "sub", x: "4.3 — Payment" },
            { t: "text", x: "Choose the payment type:" },
            { t: "list", x: [
              "Cash — enter the amount collected.",
              "Bank Deposit — enter the amount and upload a payment proof image.",
              "Split Payment — enter the cash amount and the bank amount, and upload bank proof if required."
            ]},
            { t: "text", x: "Tap Next: Review." },
            { t: "img", x: "image18.jpg", c: "Recording the payment" },
            { t: "sub", x: "4.4 — Review" },
            { t: "text", x: "Check all details carefully — items, totals, payment, and variance." },
            { t: "sub", x: "4.5 — Confirm" },
            { t: "text", x: "Tap Confirm to finish." },
            { t: "note", v: "warn", x: "Important: after you confirm, you cannot edit the delivery." },
            { t: "img", x: "image19.jpg", c: "Confirming the completed delivery" }
          ]
        },
        {
          id: "one-active", title: "One Active Delivery at a Time", icon: "lock",
          blocks: [
            { t: "text", x: "You cannot start a new delivery while another order is still active." },
            { t: "text", x: "Before starting a new order, you must complete the current delivery or reschedule the current order. This helps ensure deliveries are handled one at a time." },
            { t: "gallery", x: ["image20.jpg", "image21.jpg"], c: "Only one delivery can be active" }
          ]
        },
        {
          id: "reschedule", title: "Reschedule Delivery", icon: "calendar",
          blocks: [
            { t: "note", v: "info", x: "You can reschedule an order within the same day only." },
            { t: "steps", x: ["Open the order from My Deliveries.", "Tap Reschedule.", "Pick a new time and confirm."] },
            { t: "gallery", x: ["image22.jpg", "image23.jpg"], c: "Rescheduling a delivery" }
          ]
        },
        {
          id: "cancel", title: "Cancel During Delivery", icon: "x-circle",
          blocks: [
            { t: "text", x: "After starting a delivery, you can cancel it if needed." },
            { t: "steps", x: ["Tap Cancel.", "Choose a cancellation reason.", "Submit the cancellation."] },
            { t: "text", x: "Cancellation reasons include:" },
            { t: "list", x: ["Wrong / undeliverable address", "Customer phone unreachable", "Customer not at the location", "Customer refused delivery", "Couldn't access the building / area", "Driver / vehicle problem", "Other (add a note)"] },
            { t: "note", v: "info", x: "The cancellation request is sent to the manager for review." },
            { t: "img", x: "image24.jpg", c: "Cancelling during delivery" }
          ]
        },
        {
          id: "full-rejection", title: "Full Rejection", icon: "ban",
          blocks: [
            { t: "text", x: "Use a full rejection when the customer rejects all items." },
            { t: "steps", x: [
              "In Step 2: Select Products, unselect all items.",
              "The button changes to Confirm Rejection.",
              "Tap Confirm Rejection.",
              "In Review, select the rejection reason.",
              "Tap Confirm Rejection."
            ]},
            { t: "img", x: "image25.jpg", c: "Confirming a full rejection" }
          ]
        },
        {
          id: "return-pickup", title: "Return Pickup", icon: "rotate",
          blocks: [
            { t: "text", x: "Sometimes you will receive a Return Pickup task — collecting items from a customer and returning them to the store." },
            { t: "sub", x: "Step 1 — Open the return order" },
            { t: "steps", x: ["Go to the Return Pickup order.", "Review the customer details, location, and items to collect."] },
            { t: "gallery", x: ["image26.jpg", "image27.jpg"], c: "Opening a return pickup order" },
            { t: "sub", x: "Step 2 — Confirm pickup" },
            { t: "steps", x: ["Take a photo of the returned item(s).", "Optionally add notes (item condition: damaged, missing, etc.).", "Tap Mark as Picked Up."] },
            { t: "img", x: "image28.jpg", c: "Confirming the return pickup" },
            { t: "sub", x: "Step 3 — Deliver to store" },
            { t: "text", x: "After picking up the item(s), tap Delivery to Store to confirm you returned the item(s) to the store." },
            { t: "img", x: "image29.jpg", c: "Returning items to the store" }
          ]
        },
        {
          id: "exchange-order", title: "Exchange Order", icon: "repeat",
          blocks: [
            { t: "text", x: "You may receive an assigned exchange order. This is a delivery task specifically for replacing a customer's previous item." },
            { t: "gallery", x: ["image30.jpg", "image31.jpg"], c: "An assigned exchange order" }
          ]
        },
        {
          id: "notifications", title: "Notifications", icon: "bell",
          blocks: [
            { t: "text", x: "The system sends real-time notifications to keep you updated." },
            { t: "list", x: [
              "New Order Assigned — sent when a new delivery order is assigned to you.",
              "Deposit Confirmed — sent when accounting confirms your submitted deposit.",
              "Order Updates — sent when there are updates related to your orders."
            ]},
            { t: "img", x: "image32.jpg", c: "Driver notifications" }
          ]
        },
        {
          id: "tips", title: "Tips & Troubleshooting", icon: "lightbulb",
          blocks: [
            { t: "list", x: [
              "Always verify the selected items before confirming payment.",
              "Use clear, well-lit photos for proof and payment receipts.",
              "If something is missing or damaged, document it in the notes before confirming."
            ]}
          ]
        }
      ]
    },

    /* ================== DRIVER MANAGER ================== */
    {
      id: "driver-manager",
      name: "Driver Manager",
      tagline: "Monitor operations, assign orders, track drivers and manage accounts.",
      icon: "headset",
      imgBase: "assets/img/driver-manager/",
      intro: "Welcome to the Driver Manager Guide. This covers everything you need to manage daily delivery operations — from monitoring the overview dashboard to assigning orders, tracking drivers, and handling returns.",
      sections: [
        {
          id: "introduction", title: "Introduction", icon: "book",
          blocks: [
            { t: "text", x: "Welcome to the Driver Manager Guide. This document covers everything you need to manage daily delivery operations — from monitoring the overview dashboard to assigning orders, tracking drivers, and handling returns." },
            { t: "note", v: "info", x: "A Driver Manager can also act as a driver and complete deliveries when needed." },
            { t: "sub", x: "Your Role" },
            { t: "list", x: [
              "Overview — monitor all orders, delivery stats, and recent activity.",
              "Orders — view, search, and inspect every order in the system.",
              "Operations — assign unassigned orders to drivers in real time.",
              "Drivers — review driver performance, earnings, and workloads.",
              "Driver Accounts — add drivers and manage their account status.",
              "My Deliveries — manage and complete deliveries assigned to you personally.",
              "Map — see all active and unassigned orders on a live map."
            ]},
            { t: "img", x: "image1.jpg", c: "The Driver Manager workspace" }
          ]
        },
        {
          id: "overview", title: "Overview", icon: "home",
          blocks: [
            { t: "text", x: "The Overview is your home screen. It shows a live snapshot of today's operations at a glance." },
            { t: "sub", x: "Top Stats Cards" },
            { t: "text", x: "Four summary cards appear at the top of the page:" },
            { t: "list", x: [
              "Total / Done — total orders and how many are completed.",
              "In Transit — orders currently being delivered by a driver.",
              "Pending — orders waiting to be assigned or acted on.",
              "Delivery Rate — percentage of completed deliveries out of total."
            ]},
            { t: "img", x: "image2.jpg", c: "Overview stats cards" },
            { t: "sub", x: "Order Pipeline" },
            { t: "list", x: [
              "New — order just received, not yet confirmed.",
              "Confirmed — confirmed by admin or customer service.",
              "Cust. OK — customer confirmed the order is acceptable.",
              "Synced — synchronised with the ERP system."
            ]},
            { t: "sub", x: "Recent Orders Table" },
            { t: "text", x: "The 5 most recent orders with status, pipeline stage, progress bar, and creation date. Use the All / Active / Done tabs to filter." },
            { t: "sub", x: "WhatsApp & System Panels" },
            { t: "text", x: "At the bottom of the Overview you will find two panels:" },
            { t: "list", x: [
              "WhatsApp (24h) — Sent, Delivered, and Failed WhatsApp messages in the last 24 hours.",
              "System — Active Zones, total Drivers, and Total Users on the platform."
            ]}
          ]
        },
        {
          id: "orders", title: "Orders", icon: "clipboard",
          blocks: [
            { t: "text", x: "The Orders page lists every order, return, exchange, and cancellation. It is your primary tool for monitoring and investigating individual orders." },
            { t: "sub", x: "Revenue Summary Bar" },
            { t: "text", x: "Four financial figures are always visible at the top:" },
            { t: "list", x: [
              "Total Revenue — sum of all order amounts (QAR).",
              "Cash Collected (COD) — cash collected by drivers so far.",
              "Refunded — total refunded to customers.",
              "Bank Refunds Outstanding — approved refunds not yet processed."
            ]},
            { t: "sub", x: "Quick Views" },
            { t: "text", x: "Use the bar at the top to jump to common situations instantly:" },
            { t: "list", x: [
              "Stuck > 24h — orders that have not moved in over a day.",
              "Returns awaiting approval — return requests needing a decision.",
              "Exchanges flagged — exchanges that need attention.",
              "COD unpaid — cash orders where payment has not been collected.",
              "New today — all orders created today.",
              "Auto-cancel risk — orders at risk of automatic cancellation.",
              "Today's deliveries (map) — map filtered to today."
            ]},
            { t: "gallery", x: ["image3.jpg", "image4.jpg"], c: "Orders page and quick views" },
            { t: "sub", x: "Order Status Labels" },
            { t: "list", x: [
              "Pending — received but not yet assigned to a driver.",
              "Delivered — successfully delivered to the customer.",
              "Failed — delivery attempt was unsuccessful.",
              "Requested — a return or exchange has been requested.",
              "Received — returned item received back at the warehouse."
            ]},
            { t: "sub", x: "Viewing an Individual Order" },
            { t: "list", x: [
              "Timeline — every status change with timestamps.",
              "Customer — name, phone, city, and delivery address.",
              "Driver — who is assigned (or \"No driver assigned yet\").",
              "At a glance — item count, returns, tracking views, WhatsApp sent count.",
              "Customer feedback — rating or comment left after delivery."
            ]},
            { t: "text", x: "Tabs — Items, Money, Returns / Exchanges, and Activity Log — give deeper detail." },
            { t: "gallery", x: ["image5.jpg", "image6.jpg"], c: "Individual order detail" }
          ]
        },
        {
          id: "operations", title: "Operations", icon: "activity",
          blocks: [
            { t: "text", x: "The Operations page is the live dispatch control center. This is where you assign drivers to orders and monitor what is happening right now." },
            { t: "sub", x: "Live Overview Bar" },
            { t: "text", x: "Real-time counts at the top of the page:" },
            { t: "list", x: [
              "Total, Pending, Assigned, In Transit, Delivered, Failed — live order counts.",
              "Drivers — number of active drivers currently online."
            ]},
            { t: "gallery", x: ["image7.jpg", "image8.jpg"], c: "Operations live overview" },
            { t: "sub", x: "Unassigned Orders" },
            { t: "text", x: "Lists orders that do not yet have a driver:" },
            { t: "list", x: [
              "Moved Over — carried forward from a previous day (a badge shows how many times, e.g. \"Moved over x2\").",
              "Unassigned — new orders ready to assign today."
            ]},
            { t: "sub", x: "How to Assign an Order to a Driver" },
            { t: "steps", x: [
              "Find the order in the Unassigned Orders column.",
              "Click the blue Assign button next to it.",
              "Select a driver from the dropdown list.",
              "Choose the priority: Normal or Urgent.",
              "Click Confirm to save, or Cancel to discard."
            ]},
            { t: "gallery", x: ["image9.jpg", "image10.jpg"], c: "Assigning an order to a driver" },
            { t: "sub", x: "Active Orders" },
            { t: "text", x: "Shows orders currently assigned and in progress. Each card shows:" },
            { t: "list", x: [
              "Order number and customer name.",
              "Delivery city or area.",
              "Assigned driver name and order value.",
              "Re-assign button to change the driver if needed."
            ]},
            { t: "gallery", x: ["image11.jpg", "image12.jpg"], c: "Active orders" },
            { t: "sub", x: "Returns Awaiting Pickup Driver" },
            { t: "text", x: "Returns that need a driver to collect from the customer. Assign a driver the same way as a regular order." },
            { t: "img", x: "image13.jpg", c: "Returns awaiting a pickup driver" },
            { t: "sub", x: "Active Drivers Panel" },
            { t: "text", x: "At the bottom of Operations, driver cards show each driver's current order load. Use this to balance workload before assigning new orders." }
          ]
        },
        {
          id: "drivers", title: "Drivers", icon: "users",
          blocks: [
            { t: "text", x: "The Drivers page shows performance and financial summaries for every driver over a selected date range. Use the date picker or the shortcut buttons (Today, Yesterday, Last Week, Last Month) to change the period." },
            { t: "sub", x: "Outstanding Commission Banner" },
            { t: "text", x: "A banner at the top shows the total cash commission owed to drivers — delivery fees collected from customers via bank that must be paid out." },
            { t: "gallery", x: ["image14.jpg", "image15.jpg"], c: "Drivers page and commission banner" },
            { t: "sub", x: "Driver Cards" },
            { t: "text", x: "Each driver has a card showing:" },
            { t: "list", x: [
              "Name, star rating, and phone number.",
              "Delivered / Failed / Returned / Total — delivery counts.",
              "Collected, Cash Fees, Bank Fees, Owed — financial breakdown.",
              "Avg min — average delivery time in minutes.",
              "Active and \"to return\" badges — live workload status."
            ]},
            { t: "sub", x: "Financial Fields" },
            { t: "list", x: [
              "Collected — total cash the driver collected from customers on delivery.",
              "Cash Fees — delivery fees paid in cash (driver holds temporarily).",
              "Bank Fees — delivery fees paid via bank (must be transferred to the driver).",
              "Owed — net amount your company still owes the driver."
            ]},
            { t: "img", x: "image16.jpg", c: "Driver card with financial breakdown" }
          ]
        },
        {
          id: "driver-accounts", title: "Driver Accounts", icon: "user-plus",
          blocks: [
            { t: "text", x: "The Driver Accounts page is where you control who can log in as a driver." },
            { t: "note", v: "info", x: "Drivers set their own password via a one-time invite link — you never see or set it." },
            { t: "sub", x: "Adding a New Driver" },
            { t: "steps", x: [
              "Click the + Add driver button in the top-right corner.",
              "A single-use invite link is generated.",
              "Send the link to the driver via WhatsApp or any messaging app.",
              "The driver opens the link and fills in their name, email, phone, and password.",
              "Their account appears in the Drivers list with Active status."
            ]},
            { t: "sub", x: "Managing Existing Driver Accounts" },
            { t: "text", x: "The table shows Name, Email, Phone, Status, and Actions for all registered drivers:" },
            { t: "list", x: [
              "Edit — update the driver's name, email, or phone number.",
              "Disable — deactivate the account so the driver cannot log in. The account is not deleted and can be re-enabled later."
            ]},
            { t: "sub", x: "Pending Invites" },
            { t: "text", x: "Drivers who have been invited but not yet completed registration appear under Pending invites. Once they register, they move to the Drivers table automatically." },
            { t: "gallery", x: ["image17.jpg", "image18.jpg"], c: "Managing driver accounts" }
          ]
        },
        {
          id: "my-deliveries", title: "My Deliveries", icon: "package",
          blocks: [
            { t: "text", x: "Because Driver Managers are also drivers, you have your own My Deliveries section. This is where you manage orders assigned directly to you as a driver." },
            { t: "sub", x: "Summary Stats" },
            { t: "text", x: "Three counters at the top of the page:" },
            { t: "list", x: [
              "Assigned — orders assigned to you but not yet started.",
              "In Progress — orders you are currently delivering.",
              "Total Active — combined total in your queue."
            ]},
            { t: "note", v: "tip", x: "For more information about the delivery steps, please read the Driver guide." },
            { t: "gallery", x: ["image19.jpg", "image20.jpg"], c: "Your personal deliveries" }
          ]
        },
        {
          id: "map", title: "Map", icon: "map",
          blocks: [
            { t: "text", x: "The Map page gives a geographic view of all current orders so you can spot coverage gaps at a glance." },
            { t: "sub", x: "Map Overview" },
            { t: "text", x: "The interactive map shows pins for orders. The right panel lists:" },
            { t: "list", x: [
              "Total order count — e.g. \"Orders (11)\" with active and unassigned breakdown.",
              "Unassigned orders — highlighted in orange so they stand out.",
              "Active orders — grouped by delivery zone."
            ]},
            { t: "gallery", x: ["image21.jpg", "image22.jpg"], c: "The live order map" }
          ]
        }
      ]
    },

    /* ================== STORE MANAGER ================== */
    {
      id: "store-manager",
      name: "Store Manager",
      tagline: "Monitor store activity, run the pipeline and manage returns & exchanges.",
      icon: "store",
      imgBase: "assets/img/store-manager/",
      intro: "This guide helps Store Managers monitor store activity, manage the order pipeline, handle returns and exchanges, and keep customers informed.",
      sections: [
        {
          id: "overview", title: "Overview", icon: "home",
          blocks: [
            { t: "text", x: "The Overview page provides a daily operational summary of store activity. It helps you monitor order progress, delivery performance, system health, and overall workload." },
            { t: "sub", x: "Dashboard Summary" },
            { t: "list", x: [
              "Total Orders — total number of orders created today. Clicking this card opens the Pipeline section.",
              "Done — orders successfully completed.",
              "In Transit — orders currently being delivered. Clicking this card opens the Pipeline filtered to In Transit.",
              "Pending — orders awaiting action. Clicking this card opens the Pipeline filtered to Pending.",
              "Delivery Rate — percentage of successfully completed deliveries."
            ]},
            { t: "gallery", x: ["image1.jpg", "image2.jpg", "image3.jpg"], c: "Store overview dashboard" },
            { t: "sub", x: "Order Pipeline Chart" },
            { t: "text", x: "Displays monthly order progression through operational stages: New, Confirmed, Customer Confirmed, and Synced. Use this chart to track processing performance over time." },
            { t: "sub", x: "Recent Orders" },
            { t: "text", x: "Displays the latest 5 orders, with All / Active / Done tabs." },
            { t: "img", x: "image4.jpg", c: "Recent orders" },
            { t: "sub", x: "WhatsApp (24h)" },
            { t: "text", x: "Monitors messaging performance over the last 24 hours — Sent, Delivered, and Failed." },
            { t: "sub", x: "System Overview" },
            { t: "text", x: "Displays platform status indicators: Active Zones, Drivers, and Total Users." },
            { t: "img", x: "image5.jpg", c: "WhatsApp and system panels" }
          ]
        },
        {
          id: "orders", title: "Orders", icon: "clipboard",
          blocks: [
            { t: "text", x: "A centralized operational monitoring screen used for searching, filtering, and reviewing all orders, and for monitoring operational exceptions." },
            { t: "sub", x: "Main Tabs" },
            { t: "list", x: [
              "Orders — all delivery orders.",
              "Returns — return requests.",
              "Exchanges — exchange orders.",
              "Cancellations — cancelled orders."
            ]},
            { t: "gallery", x: ["image6.jpg", "image7.jpg"], c: "The Orders section" },
            { t: "sub", x: "Quick Views (Shortcuts)" },
            { t: "list", x: [
              "Stuck > 24h — orders with no progress for 24+ hours.",
              "Returns awaiting approval — pending return approvals.",
              "Exchanges flagged — exchange requests needing review.",
              "COD unpaid — cash-on-delivery orders pending settlement (COD = Cash on Delivery).",
              "New today — orders created today.",
              "Auto-cancel risk — orders nearing cancellation due to inactivity.",
              "Today's deliveries (map) — live geographic delivery view."
            ]},
            { t: "img", x: "image8.jpg", c: "Quick view shortcuts" }
          ]
        },
        {
          id: "filters", title: "Filters", icon: "sliders",
          blocks: [
            { t: "text", x: "Use filters to narrow down the orders you see." },
            { t: "sub", x: "Delivery Status" },
            { t: "text", x: "Examples: Pending, Assigned, Picked Up, In Transit, Delivered." },
            { t: "sub", x: "Local Status" },
            { t: "text", x: "The internal processing stage of the order." },
            { t: "sub", x: "Payment Method" },
            { t: "text", x: "Cash on Delivery, Bank Transfer, or Split Payment. A Date Range filter allows custom period filtering." },
            { t: "img", x: "image9.jpg", c: "Order filters" },
            { t: "note", v: "info", x: "When you click any Quick View, apply any Filter, or make any selection that changes the displayed results, four KPIs update accordingly: Total Revenue, Cash Collected (COD), Refunded, and Bank Refunds Outstanding." },
            { t: "img", x: "image10.jpg", c: "KPIs update with the current results" }
          ]
        },
        {
          id: "pipeline", title: "Pipeline", icon: "git",
          blocks: [
            { t: "text", x: "The Pipeline manages order progression from creation to completion." },
            { t: "sub", x: "Statuses" },
            { t: "text", x: "New, Awaiting, Ready, Assigned, In Transit, Cancel Review, Done, and Cancelled." },
            { t: "gallery", x: ["image11.jpg", "image12.jpg"], c: "The order pipeline" },
            { t: "sub", x: "New" },
            { t: "text", x: "Newly received customer orders. Available actions:" },
            { t: "list", x: [
              "Confirm Order — approves the order for processing.",
              "Exchange Order — marks the order as an exchange request.",
              "Combine — combines this order with another order.",
              "Cancel Order — cancels the order."
            ]},
            { t: "note", v: "warn", x: "An exchange can only be initiated if the customer requested it within the last 14 days." },
            { t: "note", v: "info", x: "You can only combine (pair) this order with another order for the same customer that is currently in any of the first four pipeline stages. Once combined, both orders are delivered together with one delivery fee." },
            { t: "gallery", x: ["image13.jpg", "image14.jpg"], c: "Actions on a new order" },
            { t: "sub", x: "Awaiting" },
            { t: "text", x: "Orders waiting for customer location confirmation. Available actions: Combine, Cancel Order." },
            { t: "text", x: "Customer Confirmation (automation): the customer receives a Location Confirmation Message, and after confirmation the order progresses to the next stage." },
            { t: "note", v: "warn", x: "If not confirmed within 48 hours, the order may be automatically cancelled." },
            { t: "gallery", x: ["image15.jpg", "image16.jpg"], c: "Awaiting customer confirmation" },
            { t: "sub", x: "Ready" },
            { t: "text", x: "Orders prepared and ready for driver assignment. Available actions: Combine, Cancel Order." },
            { t: "gallery", x: ["image17.jpg", "image18.jpg"], c: "Orders ready for assignment" },
            { t: "sub", x: "Assigned" },
            { t: "text", x: "Orders assigned to a driver. Displays driver information and order details. Available actions: Cancel Order, Combine." },
            { t: "gallery", x: ["image19.jpg", "image20.jpg"], c: "Assigned orders" },
            { t: "sub", x: "In Transit" },
            { t: "text", x: "Orders currently being delivered. Displays driver information and order details. Available action: Cancel Order." },
            { t: "gallery", x: ["image21.jpg", "image22.jpg"], c: "Orders in transit" },
            { t: "sub", x: "Cancel Review" },
            { t: "text", x: "Displays cancellation requests submitted by drivers, including the driver's cancellation reason (e.g. customer phone unreachable, customer not at location, wrong address). Available actions:" },
            { t: "list", x: [
              "Confirm Cancellation — cancels the order.",
              "Reassign — assigns another driver.",
              "Reschedule — schedules the delivery later."
            ]},
            { t: "note", v: "tip", x: "Contact the customer before deciding whenever possible." },
            { t: "gallery", x: ["image23.jpg", "image24.jpg"], c: "Reviewing a cancellation request" },
            { t: "sub", x: "Done" },
            { t: "text", x: "Completed deliveries. Available action — Initiate Return, used when the customer requests a return:" },
            { t: "steps", x: ["Select the returned products.", "Enter the return reason.", "Submit the return request."] },
            { t: "gallery", x: ["image25.jpg", "image26.jpg", "image27.jpg"], c: "Initiating a return on a completed order" },
            { t: "sub", x: "Cancelled" },
            { t: "text", x: "Displays cancelled orders. This view is read-only." },
            { t: "gallery", x: ["image28.jpg", "image29.jpg"], c: "Cancelled orders" }
          ]
        },
        {
          id: "returns", title: "Returns", icon: "rotate",
          blocks: [
            { t: "text", x: "The Returns section manages customer return requests. It has three tabs: Pending Review, Active, and Closed." },
            { t: "sub", x: "Pending Review" },
            { t: "text", x: "Customer return requests awaiting a decision. Manager actions:" },
            { t: "list", x: [
              "Approve — accept the return request.",
              "Reject — decline the return request."
            ]},
            { t: "text", x: "The manager can view the return reason, order details, and customer details." },
            { t: "gallery", x: ["image30.jpg", "image31.jpg"], c: "Returns pending review" },
            { t: "sub", x: "Active" },
            { t: "text", x: "Approved returns currently in progress. Displays Order, Customer, City, Items, Driver, Status, and Requested date. Common statuses are Approved and Delivered to Store." },
            { t: "sub", x: "Closed" },
            { t: "text", x: "Completed returns, with the status Received in Store." },
            { t: "gallery", x: ["image32.jpg", "image33.jpg"], c: "Active and closed returns" }
          ]
        },
        {
          id: "incoming-returns", title: "Incoming Returns", icon: "inbox",
          blocks: [
            { t: "text", x: "Tracks physical items expected back at the store. Example: 3 rejected items, 8 formal returns awaiting receipt." },
            { t: "sub", x: "Case 1 — Initiated Returns" },
            { t: "text", x: "Items returned after the manager selects Initiate Return. When the driver brings the items back, the manager clicks Confirm Receipt." },
            { t: "sub", x: "Case 2 — Exchange Requests" },
            { t: "text", x: "Items returned after the customer submitted an exchange request. The manager clicks Confirm Receipt to accept the exchange." },
            { t: "gallery", x: ["image34.jpg", "image35.jpg", "image36.jpg", "image37.jpg"], c: "Confirming incoming returns" },
            { t: "sub", x: "Case 3 — Delivery Rejections" },
            { t: "text", x: "Items the customer refused during delivery. These remain visible until physically returned; the manager confirms receipt when they arrive." },
            { t: "img", x: "image38.jpg", c: "A delivery rejection awaiting receipt" }
          ]
        },
        {
          id: "notifications", title: "Notifications", icon: "bell",
          blocks: [
            { t: "text", x: "Store Managers receive real-time operational alerts, such as:" },
            { t: "list", x: [
              "Delivery Started — driver has started the delivery.",
              "Picked Up — driver confirmed pickup.",
              "Return Request Submitted — customer submitted a return request.",
              "Exchange Notification — an exchange request was created.",
              "Orders Combined Notice — orders were merged.",
              "Return Out for Pickup — return pickup was initiated.",
              "Return Complete — return was fully completed."
            ]},
            { t: "gallery", x: ["image39.jpg", "image40.jpg"], c: "Store Manager notifications" }
          ]
        },
        {
          id: "messaging", title: "Customer Messaging Automation", icon: "message",
          blocks: [
            { t: "text", x: "The system automatically sends customer notifications at key stages." },
            { t: "sub", x: "Awaiting Stage" },
            { t: "list", x: [
              "Location Confirmation Request — sent when awaiting customer confirmation.",
              "24-Hour Reminder — warns the customer that the order will be cancelled if not confirmed."
            ]},
            { t: "sub", x: "Delivery Started" },
            { t: "text", x: "The customer receives an Out for Delivery message." },
            { t: "sub", x: "Delivery Completed" },
            { t: "list", x: [
              "Invoice Delivery — invoice confirmation.",
              "Return Request Form — allows the customer to submit a return."
            ]},
            { t: "sub", x: "Return Submitted" },
            { t: "text", x: "The customer receives a Return Acknowledged message." },
            { t: "sub", x: "Return Decision" },
            { t: "text", x: "The customer receives one of: Return Approved or Return Rejected." },
            { t: "sub", x: "Approved Return" },
            { t: "text", x: "The customer receives Return Out for Pickup, then Return Completed." }
          ]
        },
        {
          id: "best-practices", title: "Best Practices", icon: "check",
          blocks: [
            { t: "text", x: "Store Managers should:" },
            { t: "list", x: [
              "Review new orders promptly.",
              "Monitor stuck orders regularly.",
              "Contact customers before cancellation decisions.",
              "Confirm physical returns immediately upon receipt.",
              "Review cancel requests carefully before confirming."
            ]}
          ]
        }
      ]
    },

    /* ==================== ACCOUNTANT ==================== */
    {
      id: "accountant",
      name: "Accountant",
      tagline: "Review collections, record deposits, manage payouts and invoices.",
      icon: "calculator",
      imgBase: "assets/img/accountant/",
      intro: "This guide helps Accountants review driver collections, monitor balances, record deposits, review invoices, and track returned or failed orders.",
      sections: [
        {
          id: "overview", title: "Overview", icon: "book",
          blocks: [
            { t: "text", x: "The Accountant role focuses on the financial side of delivery operations." },
            { t: "sub", x: "Main functions" },
            { t: "list", x: [
              "Review driver collections.",
              "Monitor balances.",
              "Record deposits.",
              "Review invoices.",
              "Track returned / failed orders."
            ]}
          ]
        },
        {
          id: "dashboard", title: "Dashboard Summary", icon: "home",
          blocks: [
            { t: "text", x: "The top cards display totals for the selected period:" },
            { t: "list", x: [
              "Order Value — total value of all processed orders.",
              "Delivered — total value of successfully completed orders.",
              "Returned — total value of rejected or returned orders.",
              "Cash Collected — cash received by drivers from customers.",
              "Bank Received — customer payments transferred directly to the company bank account.",
              "Cash Fees — delivery fees kept by drivers from cash orders.",
              "Bank Fees — delivery fees owed to drivers from bank-paid orders.",
              "Owed To Drivers — money owed to drivers that has not been paid yet.",
              "Payouts — amounts paid by the company to drivers.",
              "Cash Refunds — refunds paid by drivers during item pickup.",
              "Deposited — amount already received and recorded by accounting.",
              "Outstanding — current balance between driver and company (cash still with the driver, or cash owed back to the driver)."
            ]},
            { t: "sub", x: "Outstanding Examples" },
            { t: "list", x: [
              "QAR 4,200 — the driver must pay the company.",
              "− QAR 5,500 — the company must pay the driver.",
              "OK — no balance due."
            ]},
            { t: "img", x: "image1.jpg", c: "Dashboard summary cards" }
          ]
        },
        {
          id: "date-filters", title: "Date Filters", icon: "calendar",
          blocks: [
            { t: "text", x: "Use filters to view specific periods." },
            { t: "sub", x: "Quick filters" },
            { t: "text", x: "Today, Yesterday, Last Week, and Last Month." },
            { t: "sub", x: "Custom range" },
            { t: "text", x: "Select any date range using From → To." },
            { t: "img", x: "image2.jpg", c: "Date filter options" }
          ]
        },
        {
          id: "collections", title: "Collections", icon: "coins",
          blocks: [
            { t: "text", x: "Displays each driver's financial summary, including:" },
            { t: "list", x: [
              "Orders — number of deliveries.",
              "Delivered — completed delivery value.",
              "Returned — returned or rejected order value.",
              "Cash — cash collected from customers.",
              "Bank — bank transfer payments.",
              "Cash Fees — delivery fees kept by the driver from cash orders.",
              "Refunds — refund amounts related to returned or rejected orders.",
              "Deposited — already submitted and recorded.",
              "Outstanding — remaining balance between driver and company."
            ]},
            { t: "note", v: "info", x: "Clicking Collect means you have received the cash from the driver. OK means the account is clear — the driver has no balance due or receivable." },
            { t: "img", x: "image3.jpg", c: "Driver collections" }
          ]
        },
        {
          id: "notifications", title: "Notifications", icon: "bell",
          blocks: [
            { t: "text", x: "The system sends accounting alerts." },
            { t: "text", x: "For example, a Cash to Collect alert includes the driver name and order number." },
            { t: "gallery", x: ["image4.jpg", "image5.jpg"], c: "Accounting notifications" }
          ]
        },
        {
          id: "deposits", title: "Deposits", icon: "bank",
          blocks: [
            { t: "text", x: "Displays all recorded deposit transactions submitted by drivers or entered by finance. The accountant can review:" },
            { t: "list", x: [
              "Date — deposit record date.",
              "Driver — driver associated with the deposit.",
              "Amount — recorded deposit value.",
              "Type — deposit method.",
              "Reference — bank reference number (if available).",
              "Recorded By — user who logged the deposit."
            ]},
            { t: "sub", x: "Deposit Types" },
            { t: "list", x: [
              "Cash to Accountant — cash physically handed to finance.",
              "Bank Deposit — bank transfer confirmed by accounting.",
              "Adjustment — manual balance correction / settlement adjustment."
            ]},
            { t: "img", x: "image6.jpg", c: "Recorded deposits" }
          ]
        },
        {
          id: "payouts", title: "Payouts", icon: "send",
          blocks: [
            { t: "text", x: "Displays each driver's payout summary for the selected period. It shows:" },
            { t: "list", x: [
              "Total completed orders.",
              "Cash collected.",
              "Bank payments.",
              "Delivery fees earned.",
              "Total already paid."
            ]},
            { t: "list", x: [
              "Pay QAR XXX — this delivery fee amount is owed to the driver, usually from orders paid by bank transfer where the company received the payment.",
              "Settled — the driver has already been fully paid."
            ]},
            { t: "img", x: "image7.jpg", c: "Driver payout summary" },
            { t: "note", v: "tip", x: "To pay a driver, click \"PAY QAR xxx\", select the driver's name, enter the amount, then press Confirm." },
            { t: "gallery", x: ["image8.jpg", "image9.jpg"], c: "Paying a driver" }
          ]
        },
        {
          id: "invoices", title: "Invoices", icon: "file",
          blocks: [
            { t: "text", x: "Invoices are generated automatically. The available action is Download PDF." },
            { t: "note", v: "warn", x: "Invoices cannot be edited." },
            { t: "gallery", x: ["image10.jpg", "image11.jpg"], c: "Invoices" }
          ]
        },
        {
          id: "bank-payments", title: "Bank Payments", icon: "card",
          blocks: [
            { t: "text", x: "Shows customer payments made through bank transfer, including:" },
            { t: "list", x: ["Order number", "Amount", "Payment type", "Screenshot / proof"] },
            { t: "img", x: "image12.jpg", c: "Bank payments" }
          ]
        },
        {
          id: "refunds", title: "Refunds", icon: "rotate",
          blocks: [
            { t: "text", x: "Shows refund amounts paid by drivers during pickups or return-related deliveries. Displays:" },
            { t: "list", x: ["Order number", "Customer name", "Driver name", "Refund amount", "Refund date"] },
            { t: "text", x: "These amounts are tracked so they can be included in driver financial calculations and reimbursement records." },
            { t: "img", x: "image13.jpg", c: "Refunds" }
          ]
        },
        {
          id: "failed-returned", title: "Failed / Returned Orders", icon: "alert",
          blocks: [
            { t: "text", x: "Displays delivery issues, including the order number, customer, driver, status, and reason." },
            { t: "sub", x: "Financial effect" },
            { t: "list", x: [
              "Cash orders — the driver keeps the delivery fee.",
              "Bank orders — the delivery fee affects the driver balance."
            ]},
            { t: "img", x: "image14.jpg", c: "Failed and returned orders" }
          ]
        }
      ]
    }

  ]
};
