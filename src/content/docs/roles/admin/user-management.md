---
title: User Management
description: How to manage users, roles, and system configuration
lastUpdated: 2025-09-29
---

You can manage users, configure roles, and control system access through the Configuration Centre.

## Accessing the Configuration Centre

1. Navigate to **Admin** → **Configuration Centre**
2. Access the following management areas:
   - **Account Management**: View and edit user accounts
   - **Create User Accounts**: Add new team members
   - **Team Management**: Organize and manage teams
   - **Logs**: View system activity and changes
   - **Configuration Centre**: Manage roles and permissions

## Managing existing roles

View and manage all system roles in the **Existing Roles** section:

**Available roles:**
- Static Manager
- Resourcing
- Logistics
- Deputy Head of Operations
- Head of Operations
- Ops Manager
- Ops Support
- Finance
- Admin
- Assistant Ops Manager
- COO (Chief Operating Officer)
- Head of Quality Solutions and Compliance
- Non-Executive Director
- Day Rate Manager

### Role information displayed

For each role, you can see:
- **Role Name**: The name of the role
- **Page Access Control**: Which pages and features this role can access
- **Actions**: Options to edit or manage the role

## Creating custom roles

You can create new roles with specific permissions to match your organizational needs.

### How to add a new role

1. In the Configuration Centre, locate **Add New Role** section
2. Enter the **New Role** name in the text field
3. Configure **Page Access Control** by selecting appropriate permissions:

**Overview section:**
- Dashboard
- Operational Tracker
- GitHub Integration
- Lieu & Holidays
- Logs

**Scheduling section:**
- Rota Management
- Submit Request
- Submitted Schedules
- Schedules

**Management section:**
- Allocated Contracts
- Assigned Events
- EOS Actions
- Manage Request
- Account Management
- Create User Accounts

4. Click **Save New Role** to create the role

## Page access control explained

When creating or editing roles, you can control access to specific system areas:

**Overview pages**: Dashboard and tracking tools
**Scheduling pages**: Rota, requests, and schedule management
**Management pages**: Administrative and operational management tools

Select only the pages that users with this role need to perform their job functions.

## Role configuration best practices

- **Principle of least privilege**: Only grant access to pages users need for their work
- **Clear naming**: Use descriptive role names that reflect job functions
- **Regular reviews**: Periodically review roles to ensure they're still appropriate
- **Documentation**: Keep notes on why specific permissions were granted
- **Testing**: Test new roles with a test user before rolling out

## Managing role assignments

After creating or modifying roles:
1. Navigate to **Account Management** to view users
2. Edit user accounts to assign new roles
3. Verify users have appropriate access after role changes
4. Communicate changes to affected users

## Common role configurations

**Administrative roles**: Full access to configuration, user management, and system settings
**Management roles**: Access to dashboards, management tools, and team oversight features
**Operational roles**: Access to scheduling, requests, and day-to-day operational features
**Specialized roles**: Limited access to specific areas based on job function

## Role access examples

**Admin role** includes:
- Account Management
- Logs
- Configuration Centre
- Team Management
- Create User Accounts

**Ops Support role** includes:
- Dashboard
- Operational Tracker
- Rota Management
- Submitted Schedules
- Schedules
- EOS Actions
- Manage Request
- Account Management
- Team Management
- Configuration Centre

**Static Manager role** includes:
- Dashboard
- Submit Request
- Schedules
- EOS Actions

:::note[Role permissions and access]
Changes to role permissions take effect immediately for all users assigned to that role. Make sure to communicate significant permission changes to affected users.
:::

## Monitoring user activity

Use the **Logs** section to:
- Track user login activity
- Monitor system changes and updates
- Review account modifications
- Audit role permission changes
- Identify unusual access patterns

## Troubleshooting role access

**If a user can't access a feature:**
1. Verify their assigned role in Account Management
2. Check the role's page access permissions
3. Ensure the correct permissions are enabled for that page
4. Confirm no system-wide restrictions are in place
5. Have the user log out and back in to refresh permissions

**If role changes don't apply:**
- Users may need to log out and back in
- Clear browser cache if issues persist
- Verify the role was saved correctly
- Check for conflicting permission settings