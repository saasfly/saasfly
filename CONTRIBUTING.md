## Can I create a pull request for saasfly?

Yes or no, it depends on what you will try to do. Since I don't want to waste your time, be sure to **create an empty draft pull request or open an issue, so we can have a discussion first**. Especially for a large pull request or you don't know if it will be merged or not.

Here are some references:

### ✅ Usually accepted

- Bug fix
- Security fix
- Adding notification providers
- Adding new language keys

### ⚠️ Discussion required

- Large pull requests
- New features

### ❌ Won't be merged

- Do not pass the auto-test(we dont have auto-test now)
- Any breaking changes
- Duplicated pull requests
- Buggy
- UI/UX is not close to saasfly
- Modifications or deletions of existing logic without a valid reason.
- Adding functions that is completely out of scope
- Converting existing code into other programming languages
- Unnecessarily large code changes that are hard to review and cause conflicts with other PRs.

The above cases may not cover all possible situations.

If your pull request does not meet my expectations, I will reject it, no matter how much time you spent on it. Therefore, it is essential to have a discussion beforehand.

I will assign your pull request to a [milestone](https://github.com/saasfly/saasfly/milestones), if I plan to review and merge it.

Also, please don't rush or ask for an ETA, because I have to understand the pull request, make sure it is no breaking changes and stick to my vision of this project, especially for large pull requests.

### Recommended Pull Request Guideline

Before deep into coding, discussion first is preferred. Creating an empty pull request for discussion would be recommended.

1. Fork the project
2. Clone your fork repo to local
3. Create a new branch
4. Create an empty commit: `git commit -m "<YOUR TASK NAME>" --allow-empty`
5. Push to your fork repo
6. Prepare a pull request: https://github.com/saasfly/saasfly/compare
7. Write a proper description. You can mention @tianzx in it, so @tianzx will get the notification.
8. Create your pull request as a Draft
9. Wait for the discussion