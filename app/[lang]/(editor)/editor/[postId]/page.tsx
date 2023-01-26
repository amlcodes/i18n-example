// import { Editor } from '@/components/dashboard/editor'
// import { authOptions } from '@creatorkit/auth'
// import { prisma } from '@creatorkit/database'
// import { Post, User } from '@prisma/client'
// import { unstable_getServerSession } from 'next-auth'
// import { notFound, redirect } from 'next/navigation'

// export const runtime = 'nodejs'

// export const dynamic = 'force-dynamic'

// async function getPostForUser(postId: Post["id"], userId: User["id"]) {
async function getPostForUser(postid: string) {
	return {
		id: postid
	}
	// return await prisma.post.findFirst({
	// 	where: {
	// 		id: postId,
	// 		authorId: userId
	// 	}
	// })
}

interface EditorPageProps {
	params: {
		// postId: string;
		postId: string
		lang: string
	}
}

export default async function EditorPage({
	params: { postId, lang }
}: EditorPageProps) {
	// const { user } = await unstable_getServerSession(authOptions)

	// if (!user) {
	//   redirect(authOptions.pages.signIn)
	// }

	// const post = await getPostForUser(postId, user.id)
	const examplepost = await getPostForUser(postId)

	// if (!post) {
	//   notFound()
	// }

	return (
		<div>
			<h1>
				postId: {postId} in {lang}
				{JSON.stringify(examplepost)}
			</h1>
		</div>
		// <Editor
		//   lang={lang}
		//   post={{
		//     id: post.id,
		//     title: post.title,
		//     content: post.content,
		//     published: post.published,
		//   }}
		// />
	)
}
