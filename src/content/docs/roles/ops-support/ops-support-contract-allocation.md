---
title: Operations Support Contract Allocation Guide
description: Detailed guide to managing contracts and events within Contract Allocation
---

---

The **Contract Allocation** feature allows Operations Support to manage contracts efficiently. You can view contracts in **card view** or **table view**, create new contracts, and edit contract details. **All events are managed under the View Events page**.

> **Note:** All events under a selected contract will be reflected in schedules for allocated managers.

## Features

- View contracts in **Card View** or **Table View**
- Search contracts by **contract name**
- Create a new contract
- Edit contract details
- View events associated with a contract
- Manage events (create, update, cancel, delete) via the **View Events** page

---

## How to Use Contract Allocation

### 1. Creating a Contract

1. Click **Create New Contract**.
2. **Step 1: Contract Details**
   - **Required fields**: Contract Name, Estimated Operational Days
   - **Optional fields**: Client/Department Code, Duplicate Succession Plan from Existing Contract, Description
3. **Step 2: Manager Allocation (Optional)**
   - Allocate multiple managers, day rate managers, support managers, and shadowers
   - Add requirements: **Name** and **Description**
4. **Step 3: Events & Conflicts (Optional)**
   - **Manual Event Creation**:  
     • **Required**: Event Name, Start Date, End Date (must be future dates), Location  
     • **Optional**: Start Time, End Time, Description, Assigned Managers, Support Managers, Shadowers
   - **Website Event Import**: Add events from scraped website data to automatically populate event fields.

> **Tip:** All events under the contract will automatically appear for assigned managers in schedules.

---

### 2. Editing a Contract

- Click **Edit Contract** on a selected contract.
- Summary numbers displayed: Total Events, Allocated Managers, Managed Events, Active Conflicts

**Tabs for Editing:**

1. **Contract Details Tab**
   - Edit Contract Name, Client/Department Code, Estimated Operational Days, Description
2. **Manager Allocation Tab**
   - Add or remove allocated managers, day rate managers, support managers, shadowers
3. **Ops Tracker Tab**
   - Search events to view operational days per month and total per year
4. **Shadow Tracker Tab**
   - Track shadowers’ progress; promote a shadower after **3 completed shadowing sessions**

> **Note:** Contracts themselves cannot manage events; event actions are handled in the **View Events** page.

---

### 3. Managing Events (View Events Page)

- Click **View Events** within a contract to manage all associated events.

**Actions:**

1. **Search and Filter Events**
   - Filter by: Upcoming, Past, Cancelled
2. **Create New Event**
   - **Manual Event Creation**:  
     • **Required**: Event Name, Start Date, End Date (future dates only), Location  
     • **Optional**: Start Time, End Time, Description, Assigned Managers, Support Managers, Shadowers
   - **Website Event Import**: Add events using data scraped from websites to auto-populate event details
3. **Edit Event**
   - All event fields are optional when editing
4. **Cancel Event**
   - Marks an event as cancelled
5. **Restore Event**
   - Restores a previously cancelled event to active status
6. **Delete Event**
   - Permanently removes the event

> **Tip:** Use the View Events page to handle all event-related actions for a contract. Contracts themselves only allow editing and viewing.

---

## Quick Tips

- Use **Card View** for a quick overview of contracts and key metrics.
- Use **Table View** for bulk editing and filtering of contracts.
- Always check **Ops Tracker** before allocating managers.
- Track shadowers’ progress to plan promotions effectively.
- Use **View Events** to create, edit, cancel, delete, or restore events.
- All events under a contract are reflected in schedules for assigned managers.
- Monitor **Health Warnings** in events to avoid manager overload.
