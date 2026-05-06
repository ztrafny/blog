---
title: "Code Was the Easy Part"
description: "Code is getting cheaper to write. Domain knowledge isn't getting cheaper to acquire. The partnership between builder and expert is the part of the 'AI makes building easier' story that gets skipped."
draft: true
date: 2026-05-04
tags: ["solo building", "domain knowledge", "AI"]
sidebar:
  label: "2. Code Was the Easy Part"
  order: 2
---

At the end of the last post I said the interesting question wasn't whether more software gets made, but who's making it, and for whom. The first half of that question has a more specific answer in my case than the framing of solo building suggests. I built Loan Decoder, but I didn't build it alone.

The other half of the team is a domain expert who's spent more than a decade inside the federal student loan system. Without him, what I shipped would have been a confident-looking tool that gave the wrong answers.

That's the part of this story I want to spend time on, because it gets skipped in most of the conversations about software getting cheaper to build.

Code, increasingly, is the cheap part. The cost of going from idea to working software has dropped, as I wrote last time, by roughly an order of magnitude. What that hides is that for any tool with real depth, code was rarely the bottleneck. The bottleneck was always the second-order knowledge: not "how do I write a Python function" but "what should the function actually do, given the rules of this domain, the edge cases that show up in practice, the way the policy is interpreted versus written."

Domain knowledge doesn't reduce on the same curve. There's no foundation model that has lived inside student loan policy for ten years. There are documents, sure. There are statutes and regulations. But the way those things actually operate (the gap between the letter of the rules and how they get applied in real cases, the workarounds practitioners have built up over years, the distinction between what borrowers should be told and what they actually need to do) is a body of tacit knowledge held in the heads of people who do the work. AI can summarize a policy document. It cannot tell you which forbearance code an income-driven repayment specialist should reach for in the third week of December when the borrower has missed a recertification window and the servicer has changed since the last filing.

I learned this the hard way. My first instinct was to build something based on what I'd read, what I could research, what seemed obviously useful from a product-thinking perspective. (Old PM habits.) When I showed early versions to my partner, the response was usually some combination of "this isn't what we do" and "you can't represent it that way without giving people the wrong answer." Not because I was sloppy, but because the domain doesn't fit the shape I assumed it would.

What I started doing, instead, was less product design and more knowledge engineering. Long sessions where I'd ask the kind of questions that probably felt obvious to him: what's the difference between these two repayment plans in practice, why does this rule have an exception, when does this condition matter and when doesn't it. Then I'd go off and try to model it. In code, in data structures, in the ontology of how the tool reasons about a borrower's situation. Bring it back. Watch where it broke. Adjust.

That work is what makes the tool actually useful. The interface is fine. The code is fine. What carries weight is the model of the domain that lives inside the database schema and the decision logic, and that model is faithful only because someone who actually understands student loan policy was sitting next to me, telling me when I was wrong.

I think this part gets undersold. The story we tell about the new economics of building tends to focus on the builder, the single person who can now ship something real. Loan Decoder is a two-person project: one person writes code, one person knows things you can't Google. I happen to be the visible one because I'm the one who pushes the buttons. The substantive work, more often than not, is happening on the other side of that conversation.

So: who's making it together, and how? I think that question matters more the more domain-specific these tools get. The economics of solo building have changed. The economics of solo knowing have not changed at the same pace, and I'm not sure yet what to make of that.
