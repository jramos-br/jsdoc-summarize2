# Contributing to [Summarize2](https://npm.im/jsdoc-summarize2)

First off, thank you!
We appreciate your interest and want to make contributing to this project as easy and
transparent as possible.

[Code of conduct](#code-of-conduct)<br/>
[How to contribute](#how-to-contribute)<br/>
[Pull requests workflow](#pull-requests-workflow)<br/>
[How to generate CHANGELOG](#how-to-generate-changelog)<br/>
[How to update NEWS](#how-to-update-news)<br/>
[License](#license)

##

If you're new to open source, please check out [Open Source Guides](https://opensource.guide).

We use GitHub to host code and documentation, to track issues and feature requests as well
as to receive pull requests.
If you're new to GitHub, you can browse the [guides](https://guides.github.com).
If you have expertise, maybe you just need a little [help](https://help.github.com).

## Code of conduct

This project has a code of conduct that all contributors are expected to follow.
Please see the file [CODE_OF_CONDUCT.md](/CODE_OF_CONDUCT.md) for details.
If you don't find it, please [report an issue](/../../issues/new).

## How to contribute

### Found a bug? Missing a feature?

If you find a typo, a bug or some other kind of error in the source code or documentation,
you can help us by [reporting a bug](/../../issues/new?template=bug_report.md).
Even better, if you can fix the problem with a small change, feel free to submit a
[pull request](/../../pulls).

If you'd like to suggest a new feature or a major change, start by
[opening a feature request](/../../issues/new?template=feature_request.md) with a
description of what you'd like to do and why.
This way, your suggestions can be discussed with other people before any changes are made.

### Important

Before you report a bug, open a feature request or submit a pull request, be sure to
[search](https://help.github.com/articles/searching-issues-and-pull-requests) through the
[issues](/../../issues) and [pull requests](/../../pulls) in the repository, to see
whether someone else has raised a similar question.

Please provide
[clear and concise](http://sites.ieee.org/pcs/communication-resources-for-engineers/style/write-clearly-and-concisely/)
titles for the issues and pull requests as well as fill in the descriptions as precisely
as possible.

Try to make the issues and pull requests as simple as possible by dealing with one
specific topic.
Just like for reporting issues, it's better to open three pull requests, each addressing a
different topic, instead of a big one with three topics.

## Pull requests workflow

The process outlined here is detailed in [Git Workflow](https://www.asmeurer.com/git-workflow/).

If you're new to [git](https://git-scm.com), please check out the online book
[Pro Git](https://git-scm.com/book/en/v2).

If you're already a [git](https://git-scm.com) user, but never had contributed with open
source projects, you might look at:

- [Contributing to a Project](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
  - [Commit Guidelines](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines)
  - [Forked Public Project](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_public_project)

### Cloning and forking the repository (perform this only once)

1. Clone the project's repository.
2. Fork the repository on GitHub to your personal account.
3. Add your fork as a remote.

### Making changes

1. Update master.
2. Create a branch.
3. Make your changes and commit them.
4. Push up your branch.
5. Make a pull request.
6. Request a review of your changes.

### Making additional changes (in the same pull request)

1. Make another changes and commit them.
2. Push up your branch.
3. Request a review of your changes.

### General guidelines

When adding a new feature, make sure you have new tests to show the feature triggers the
new behavior when it should, and to show the feature doesn't trigger when
it shouldn't.

After any code change, make sure the entire test suite passes.

When updating your fork with upstream changes, please use `git pull --rebase` to avoid
creating unnecessary *merge commits*.

During the code review, if you make changes, add new commits to the pull request for each
change.

### Commit guidelines

Make separate commits for logically separate changes.
Commits should as far as possible be atomic and related only to the specific fix or change
being made.

Try to keep the commit messages as
[clear and concise](http://sites.ieee.org/pcs/communication-resources-for-engineers/style/write-clearly-and-concisely/)
as possible.

Prefer the [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) to describe
your changes, e.g. "make xyzzy do frotz" instead of "[This patch] makes xyzzy do frotz"
or "[I] changed xyzzy to do frotz", as if you're giving orders to the codebase to change
its behavior.

If you need to write a long commit message, begin it with a single short line summarizing
the change, followed by a blank line and then a more thorough description.
Wrap the text to about 72 characters.
The following example illustrates a long commit message:

```
Capitalized short (72 chars or less) summary of changes

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The blank
line separating the summary from the body is critical, unless you omit
the body entirely.

Further paragraphs come after blank lines.

- Bullet points are okay, too.
- Typically a hyphen or asterisk is used for the bullet, followed by
  a single space, with an optional blank line in between.
- Use a hanging indent.

Explain the problem that this commit is solving. Focus on why you are
making this change as opposed to how (the code explains that). Try to
make sure your explanation can be understood without external
resources. For example, instead of giving a URL to a mailing list
archive, summarize the relevant points of the discussion.

Put references to issues and feature requests at the bottom, like
this:

Resolves: #123
See also: #456, #789
```

Make sure your commit doesn't add commented out debugging code, or include any extra files
which don't relate to what your change is trying to achieve.

### Coding Style

- Format settings for Visual Studio Code in [.vscode/settings.json](/.vscode/settings.json).
- 2 spaces for indentation instead of tabs.
- Maximum line length is 90 characters.
- No warnings or errors from eslint.

### Important to remember

- If you've added code that should be tested, add tests.
- If you've changed APIs or any user-visible interface, update the documentation.
- Make sure your code lints.
- Ensure the test suite passes.

## How to generate CHANGELOG

The file [CHANGELOG.md](/CHANGELOG.md) contains a list of changes committed to the source
control.

The purpose of the change log is so that people investigating bugs in the future will know
about the changes that might have introduced the bug.
Often a new bug can be found by looking at what was recently changed.
Change logs also can help you eliminate conceptual inconsistencies between different parts
of a program, by giving you a history of how the conflicting concepts arose and who they
came from.

For each commit, the names and status of the changed files are listed.
The following command automatically generates the file [CHANGELOG.md](/CHANGELOG.md),
reading log data from the git repository:

```
npm run changelog
```

## How to update NEWS

The file [NEWS.md](/NEWS.md) contains a list of user-visible, important, interesting or
otherwise notable changes worth mentioning.

In each new release, add items to the front of the file and identify the version they
pertain to.
Don't discard old items; leave them in the file after the newer items.
This way, a user upgrading from any previous version can see what has changed.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
Make sure you follow the rules for version numbering.

There should be an entry for every single version, formatted as follows:

```
## Version X.Y.Z (YYYY-MM-DD)

- Summary of the first change.
- Summary of the second change.
- Summary of the third change.
- And so on.
```

Types of changes:

- *Add* for new features.
- *Change* for changes in existing functionality.
- *Improve* for improvements in existing functionality.
- *Update* for changes that don't affect existing functionality.
- *Deprecate* for soon-to-be removed features.
- *Remove* for now removed features.
- *Fix* for any bug fixes.

If the number of changes grow up, they can be grouped by type.
In this case, the H3 title of the group should be:

- *Added* for new features.
- *Changed* for changes in existing functionality.
- *Improved* for improvements in existing functionality.
- *Updated* for changes that don't affect existing functionality.
- *Deprecated* for soon-to-be removed features.
- *Removed* for now removed features.
- *Fixed* for any bug fixes.
- *Security* in case of vulnerabilities.

There might be an entry at the top of the version list named *Unreleased*, to track
upcoming changes.

## License

By contributing, you agree that your contributions will be licensed under the terms of the
MIT License.
See the file [LICENSE](/LICENSE) for the MIT license details.
If you don't find it, please [report an issue](/../../issues/new).
