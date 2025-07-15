
const employees = [
  {
    id: 1,
    name: "Ravi Sharma",
    firstname: "Ravi",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Update website content",
        description: "Revise the homepage to reflect new product launches.",
        date: "2025-05-02",
        category: "Web",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare presentation",
        description: "Slide deck for Monday's stakeholder meeting.",
        date: "2025-05-04",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix login issue",
        description: "Resolve bug preventing users from logging in.",
        date: "2025-04-30",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Priya Verma",
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Write blog post",
        description: "Article on company’s Q2 growth.",
        date: "2025-05-01",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Conduct user testing",
        description: "Interview 5 users about new dashboard.",
        date: "2025-05-05",
        category: "UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Compile reports",
        description: "Weekly analytics summary for the dashboard.",
        date: "2025-05-03",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Send newsletter",
        description: "Prepare and send May newsletter to clients.",
        date: "2025-05-02",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Amit Patel",
    firstname: "Amit",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Update pricing page",
        description: "Reflect recent changes in pricing structure.",
        date: "2025-04-29",
        category: "Web",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test API endpoints",
        description: "Verify behavior against new backend version.",
        date: "2025-05-02",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Document API",
        description: "Add missing endpoints to API reference.",
        date: "2025-05-06",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    name: "Neha Reddy",
    firstname: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Redesign login screen",
        description: "UI improvements for better accessibility.",
        date: "2025-05-01",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Increase test coverage in services module.",
        date: "2025-05-04",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix crash on mobile",
        description: "Resolve crash occurring on Android login.",
        date: "2025-05-02",
        category: "Bugfix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Review PRs",
        description: "Review pending pull requests before release.",
        date: "2025-05-03",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Sync with support",
        description: "Clarify recent ticket escalations.",
        date: "2025-05-02",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 5,
    name: "Karan Mehta",
    firstname: "Karan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Draft meeting notes",
        description: "Summarize key action items from last meeting.",
        date: "2025-04-30",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Research competitors",
        description: "Collect data on competitors’ recent launches.",
        date: "2025-05-01",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix typo in UI",
        description: "Correct spelling error in header section.",
        date: "2025-05-02",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
