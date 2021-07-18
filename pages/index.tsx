import {
  Content,
  CriteriaCell,
  Footer,
  Header,
  ImageWrapper,
  Input,
  Main,
  Table,
  TaskCell,
  TaskCellText,
  Tbody,
  Tfooter,
  Th,
  Thead,
  Tooltip,
  Tr,
  TrSubHeading,
} from "../components/styles";
import { Dispatch, SetStateAction, useState } from "react";

import Image from "next/image";
import Seo from "../components/seo";
// import Head from "next/head";
import octocat from "./octocat.jpg";
import questions from "./questions.json";

interface Tasks {
  [name: string]: {
    hours: number;
    storyPoints: number;
  };
}

interface Target {
  value: string;
  name: string;
}

interface QuestionItem {
  qn: string;
  eg?: string;
  subQns?: {
    qn: string;
    eg?: string;
  }[];
}

interface QuestionSection {
  title: string;
  qns: QuestionItem[];
}

const sum = (tasks: { [key: string]: number }): number =>
  Object.values(tasks).reduce((acc, cur) => acc + cur);

const description =
  "A checklist to help estimate the time we might take to finish a task. I didn't set a limit on the totals but generally each task shouldn't exceed 16 hours or 21 story points.";

export default function Home() {
  const [tasks, setTasks] = useState<Tasks>({});
  const [showTooltip, setShowTooltip] = useState<string | undefined>();

  const handleChange = (type: string, target: Target) => {
    const { name, value } = target;
    setTasks({
      ...tasks,
      [type]: {
        ...tasks[type],
        [name]: parseInt(value, 10),
      },
    });
  };

  const handleHrs = ({ target }: { target: Target }) =>
    handleChange("hours", target);

  const handleSp = ({ target }: { target: Target }) =>
    handleChange("storyPoints", target);

  return (
    <Main>
      {/* <Head>
        <title>Task Checklist</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Seo description={description} />
      <Content>
        <Header>
          <h1>Task Checklist</h1>
          <p>{description}</p>
        </Header>
        <Table>
          <Thead>
            <Tr>
              <Th scope="col">Task</Th>

              <Th scope="col">Hours</Th>

              <Th scope="col">Story Points</Th>
            </Tr>
          </Thead>

          {questions.map((section: QuestionSection, idx) => (
            <Tbody key={idx}>
              <TrSubHeading>
                <Th>{section.title.toUpperCase()}</Th>
              </TrSubHeading>
              {section.qns.map((item, idx) => (
                <Tr key={idx}>
                  <TaskCell>
                    <TaskCellText>{item.qn}</TaskCellText>
                    {item.eg && (
                      <TooltipComp
                        id={`tooltip-main-${idx}`}
                        info={item.eg}
                        setShowTooltip={setShowTooltip}
                        showTooltip={showTooltip}
                      />
                    )}

                    {item.subQns && (
                      <ul>
                        {item.subQns.map((subQn, idx) => (
                          <li key={idx}>
                            <TaskCellText>{subQn.qn}</TaskCellText>
                            {subQn.eg && (
                              <TooltipComp
                                id={`tooltip-sub-${idx}`}
                                info={subQn.eg}
                                setShowTooltip={setShowTooltip}
                                showTooltip={showTooltip}
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </TaskCell>
                  <CriteriaCell>
                    <Input
                      type="number"
                      name={item.qn}
                      min={0}
                      max={16}
                      onChange={handleHrs}
                    />
                  </CriteriaCell>
                  <CriteriaCell>
                    <Input
                      type="number"
                      name={item.qn}
                      min={0}
                      max={21}
                      onChange={handleSp}
                    />
                  </CriteriaCell>
                </Tr>
              ))}
            </Tbody>
          ))}
          <Tfooter>
            <Tr>
              <TaskCell>Totals</TaskCell>
              <CriteriaCell>{tasks.hours ? sum(tasks.hours) : ""}</CriteriaCell>
              <CriteriaCell>
                {tasks.storyPoints ? sum(tasks.storyPoints) : ""}
              </CriteriaCell>
            </Tr>
          </Tfooter>
        </Table>
        <Footer>
          <h2>Steal this code</h2>
          <a
            href="https://github.com/alexalexyang/task-checklist"
            target="__blank"
            aria-label="GitHub repository for this project"
          >
            <ImageWrapper>
              <Image src={octocat} alt="GitHub's octocat" />
            </ImageWrapper>
          </a>
        </Footer>
      </Content>
    </Main>
  );
}

interface TooltipCompProps {
  id: string;
  info: string;
  showTooltip?: string;
  setShowTooltip: Dispatch<SetStateAction<string | undefined>>;
}

function TooltipComp({
  id,
  info,
  showTooltip,
  setShowTooltip,
}: TooltipCompProps) {
  return (
    <>
      {/* <InfoButton
        onFocus={() => setShowTooltip(id)}
        onMouseOver={() => setShowTooltip(id)}
        onBlur={() => setShowTooltip(undefined)}
        onMouseLeave={() => setShowTooltip(undefined)}
      >
        ?
      </InfoButton>
      <Tooltip id={id} show={id === showTooltip} role="tooltip">
        {info}
      </Tooltip> */}
      <Tooltip id={id} show={true} role="tooltip">
        {info}
      </Tooltip>
    </>
  );
}
