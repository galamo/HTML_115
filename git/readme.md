# Git

1. Install Git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
2. Open Account https://github.com/

## Explain

# Git: A Version Control System

Git is a distributed version control system designed to track changes in source code during software development. It allows developers to collaborate effectively, manage code history, and handle multiple versions of a project efficiently.

---

## Key Concepts and Features

### 1. **Repository (Repo)**

- A Git repository is a storage space where your project files and their version history are saved.
- Can be local (on your computer) or remote (on platforms like GitHub, GitLab, Bitbucket).

### 2. **Branching and Merging**

- **Branch**: A separate line of development, allowing work on features or fixes independently.
- **Merge**: Combining branches into one, integrating changes from multiple developers.

### 3. **Commit**

- A snapshot of changes made to files in the repository.
- Requires a message describing the changes for clarity and history tracking.

### 4. **Staging Area**

- A place to prepare changes before committing.
- Use `git add` to move changes to the staging area.

### 5. **Remote Repositories**

- Centralized repositories hosted on platforms like GitHub.
- Allow collaboration by pushing and pulling changes.

### 6. **Pull Requests (PR)**

- A feature on platforms like GitHub for proposing changes.
- Includes code review before merging branches.

---

## Common Git Commands

### **Setup**

```bash
# Set user name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### **Basic Workflow**

```bash
# Initialize a new repository
git init

# Clone a repository
git clone <repository_url>

# Check status of the repository
git status

# Add files to the staging area
git add <file_name>

# Commit changes
git commit -m "Commit message"

# Push changes to a remote repository
git push

# Pull changes from a remote repository
git pull
```

### **Branching**

```bash
# Create a new branch
git branch <branch_name>

# Switch to a branch
git checkout <branch_name>

# Create and switch to a branch
git checkout -b <branch_name>

# Merge a branch into the current branch
git merge <branch_name>
```

### **Undoing Changes**

```bash
# Unstage a file
git reset <file_name>

# Revert a commit
git revert <commit_hash>

# Reset to a previous commit
git reset --hard <commit_hash>
```

---

## Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

---
