import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.rock.upsert({
        where: { name: 'Aliens' },
        update: {},
        create: {
            name: 'Aliens',
            description: 'fictional being from another world.',
            lastSee: 'Simon Bolivar 1-62 y Manuel Vega',
            countlastSee: 12,
            extinct: false,
        },
    });

    const post2 = await prisma.rock.upsert({
        where: { name: 'Aliens' },
        update: {},
        create: {
            name: 'Victoria',
            description: 'fictional being from another world.',
            lastSee: 'Parque de Madre',
            countlastSee: 13,
            extinct: false,
        },
    });

    console.log({ post1, post2 });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });